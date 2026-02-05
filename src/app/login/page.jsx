import LoginForm from "@/components/LoginForm/LoginForm";
import React, { Suspense } from "react";

const LoginPage = () => {
	return (
		<>
			<section className="min-h-[calc(100vh-319px)] flex items-center justify-center">
				<Suspense fallback={<p>Loading....</p>}>
					<LoginForm />
				</Suspense>
			</section>
		</>
	);
};

export default LoginPage;
