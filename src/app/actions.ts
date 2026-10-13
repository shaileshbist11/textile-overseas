"use server";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "company" | "email" | "category" | "quantity" | "message", string>>;
  reference?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitInquiry(
  _prevState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    country: String(formData.get("country") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim(),
    quantity: String(formData.get("quantity") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: InquiryState["errors"] = {};

  if (values.name.length < 2) errors.name = "Please enter your full name.";
  if (values.company.length < 2) errors.company = "Please enter your company name.";
  if (!emailPattern.test(values.email)) errors.email = "Please enter a valid work email.";
  if (!values.category) errors.category = "Select a product division.";
  if (!values.quantity || Number.isNaN(Number(values.quantity)) || Number(values.quantity) <= 0) {
    errors.quantity = "Enter the estimated order quantity in pieces.";
  }
  if (values.message.length < 20) {
    errors.message = "Tell us a little more — at least 20 characters (style, fabric, delivery window).";
  }

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  const reference = `IO-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;

  return {
    status: "success",
    reference,
    message: `Thank you, ${values.name.split(" ")[0]}. Your inquiry ${reference} is with our merchandising team — expect FOB guidance within 48 hours.`,
  };
}

export type TourState = {
  status: "idle" | "success" | "error";
  message?: string;
  reference?: string;
};

export async function submitTourRequest(
  _prevState: TourState,
  formData: FormData,
): Promise<TourState> {
  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const date = String(formData.get("date") ?? "").trim();
  const heads = String(formData.get("heads") ?? "").trim();

  if (
    name.length < 2 ||
    company.length < 2 ||
    !emailPattern.test(email) ||
    !date ||
    !heads
  ) {
    return {
      status: "error",
      message: "Please complete all tour fields with a valid work email.",
    };
  }

  const reference = `TOUR-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
  return {
    status: "success",
    reference,
    message: `Thanks ${name.split(" ")[0]} — factory tour request ${reference} received for ${date}. Our compliance desk will confirm the visit slot within one business day.`,
  };
}
