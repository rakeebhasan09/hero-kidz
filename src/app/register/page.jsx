import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import React, { Suspense } from "react";

const RegisterPage = () => {
	return (
		<section className="min-h-[calc(100vh-319px)] flex items-center justify-center">
			<Suspense fallback={<p>Form Loading....</p>}>
				<RegistrationForm />
			</Suspense>
		</section>
	);
};

export default RegisterPage;
