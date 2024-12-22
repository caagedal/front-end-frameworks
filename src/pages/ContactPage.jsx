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
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid address."),
        yourMessage: yup
            .string()
            .required("Please enter message here")
            .min(3, "Message too short."),
    })
    .required();

    export function ContactPage(){
        const {
            register,
            handleSubmit,
            formState: {errors},
        } = useForm({
            resolver: yupResolver(schema),
        });

        function onSubmit(data){
            console.log(data);
        }

        return (
            <div className="">
                <h1>Contact us</h1>
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <label htmlFor="full-name" >Full name</label>
                    <input name="full-name" placeholder="Full name" {...register("fullName")}/>
                    <p>{errors.fullName?.message}</p>

                    <label htmlFor="subject">Subject</label>
                    <input name="subject" placeholder="Subject" {...register("subject")} />
                    <p>{errors.subject?.message}</p>

                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Email" {...register("email")} />
                    <p>{errors.email?.message}</p>

                    <label htmlFor="body">Subject</label>
                    <textarea name="body" placeholder="Your message" {...register("yourMessage")} />
                    <p>{errors.yourMessage?.message}</p>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }