import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
    .object({
        fullName: yup
            .string()
            .required("Please enter your full name.")
            .min(3, "Must be at least 3 characters"),
        subject: yup
            .string()
            .required("Please enter a subject.")
            .min(3, "Not enough characters."),
        email: yup
            .string()
            .required("Email required.")
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address."),
        yourMessage: yup
            .string()
            .required("Please enter your message.")
            .min(3, "Message too short."),
    })
    .required();

export function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className="max-w-lg mx-auto my-8 py-10 px-4 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {/* Full Name */}
                <div className="flex flex-col">
                    <label htmlFor="full-name" className="font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        id="full-name"
                        name="full-name"
                        placeholder="Full name"
                        {...register("fullName")}
                        className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                    <p className="text-sm text-red-500 mt-1">{errors.fullName?.message}</p>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                    <label htmlFor="subject" className="font-medium text-gray-700">
                        Subject
                    </label>
                    <input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        {...register("subject")}
                        className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                    <p className="text-sm text-red-500 mt-1">{errors.subject?.message}</p>
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label htmlFor="email" className="font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        placeholder="Email"
                        {...register("email")}
                        className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                    <p className="text-sm text-red-500 mt-1">{errors.email?.message}</p>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                    <label htmlFor="body" className="font-medium text-gray-700">
                        Your Message
                    </label>
                    <textarea
                        id="body"
                        name="body"
                        placeholder="Your message"
                        {...register("yourMessage")}
                        className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none h-32"
                    />
                    <p className="text-sm text-red-500 mt-1">{errors.yourMessage?.message}</p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-4 p-2 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
