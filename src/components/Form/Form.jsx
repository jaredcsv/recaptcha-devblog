import "./Form.css";
import ReCAPTCHA from "react-google-recaptcha";

function Form() {
  const siteKey = "site-key";

  return (
    <>
      <div className="form-title">
        <h1>Contact</h1>
      </div>
      <form id="contact">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter your subject"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <ReCAPTCHA className="g-recaptcha" sitekey={siteKey} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
