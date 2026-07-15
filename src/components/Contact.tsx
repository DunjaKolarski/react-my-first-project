import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <section>
          <h3>Address</h3>
          <p>123 Pet Street, Belgrade, Serbia</p>
        </section>

        <section>
          <h3>Phone</h3>
          <p>+381 60 123 4567</p>
        </section>

        <section>
          <h3>Email</h3>
          <p>info@pawspa.com</p>
        </section>
      </div>
    </section>
  );
}

export default Contact;
