"use server";

import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";

const { dbConnect, collections } = require("@/lib/dbConnect");

const cartCollection = dbConnect(collections.CART);

// Save Product On Cart
export const handleCart = async ({ product, inc = true }) => {
	const { user } = (await getServerSession(authOptions)) || {};
	if (!user) return { success: false };

	// Get Cart Item = user.email && productId
	const query = { email: user?.email, productId: product?._id };
	const isAdded = await cartCollection.findOne(query);

	if (isAdded) {
		// Exist = update cart
		const updatedData = {
			$inc: {
				quantity: inc ? 1 : -1,
			},
		};

		const result = await cartCollection.updateOne(query, updatedData);
		return { success: Boolean(result.modifiedCount) };
	} else {
		// Not Exist = insert cart
		const newData = {
			productId: product?._id,
			username: user?.name,
			email: user?.email,
			title: product?.title,
			quantity: 1,
			image: product?.image,
			price: product?.price - (product?.price * product?.discount) / 100,
		};

		const result = await cartCollection.insertOne(newData);
		return { success: result.acknowledged };
	}
};

// Get Saved Cart's
export const getCart = cache(async () => {
	const { user } = (await getServerSession(authOptions)) || {};
	if (!user) return [];

	const query = { email: user?.email };

	const result = await cartCollection.find(query).toArray();

	return result;
});

export const deleteItemsFromCart = async (id) => {
	const { user } = (await getServerSession(authOptions)) || {};
	if (!user) return { success: false };

	if (id.length != 24) {
		return { success: false };
	}

	const query = { _id: new ObjectId(id) };

	const result = await cartCollection.deleteOne(query);

	if (Boolean(result.deletedCount)) {
		revalidatePath("/cart");
	}

	return { success: Boolean(result.deletedCount) };
};
