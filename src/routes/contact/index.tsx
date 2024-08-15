import { component$, $, QRL } from "@builder.io/qwik";
import { Hero, DemoBox } from "~/components";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";
import { formAction$, useForm, valiForm$ } from "@modular-forms/qwik";
import * as v from "valibot";

const heroContent = {
  title: "Contact Us",
  description:
    "We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is here to assist you and provide the support you need on your nutritional journey. Please don't hesitate to reach out to us using any of the following contact methods.",
};

const contactForm = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your email."),
    v.email("The email address is badly formatted.")
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your password."),
    v.minLength(8, "Your password must have 8 characters or more.")
  ),
});

type LoginForm = v.InferInput<typeof contactForm>;

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
  email: "",
  password: "",
}));

export const useFormAction = formAction$<LoginForm>((values) => {
  console.log("Form Submitted:", values);
}, valiForm$(contactForm));

export default component$(() => {
  const [loginForm, { Form, Field }] = useForm<LoginForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(contactForm),
  });

  const handleSubmit: QRL<SubmitHandler<LoginForm>> = $((values, event) => {
    console.log(values);
  });

  return (
    <main>
      <section class="container-regular">
        <Hero {...heroContent} />
      </section>
      <section class="container-regular py-12 lg:py-24 2xl:py-36">
        <div class="contact-box">
          <div class="w-full grid grid-cols-2 gap-12">
            <Form onSubmit$={handleSubmit} class="space-y-12">
              <div class="space-y-7">
                <div class="grid grid-cols-2 gap-7">
                  <Field name="email">
                    {(field, props) => (
                      <div class="input-group">
                        <label>Full Name</label>
                        <input {...props} type="text" value={field.value} />
                        {field.error && <div>{field.error}</div>}
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {(field, props) => (
                      <div class="input-group">
                        <label>Email</label>
                        <input {...props} type="email" value={field.value} />
                        {field.error && <div>{field.error}</div>}
                      </div>
                    )}
                  </Field>
                </div>
                <Field name="password">
                  {(field, props) => (
                    <div class="input-group">
                      <label>Phone Number</label>
                      <input {...props} type="text" value={field.value} />
                      {field.error && <div>{field.error}</div>}
                    </div>
                  )}
                </Field>
                <Field name="password">
                  {(field, props) => (
                    <div class="input-group">
                      <label>Message</label>
                      <textarea {...props} value={field.value}></textarea>
                      {field.error && <div>{field.error}</div>}
                    </div>
                  )}
                </Field>
              </div>
              <button type="submit" class="submit--btn">
                Send Message
              </button>
            </Form>
            <div>123</div>
          </div>
        </div>
      </section>
      <section class="container-regular py-12 lg:py-24 2xl:py-36">
        <DemoBox />
      </section>
    </main>
  );
});
