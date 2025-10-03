import React from "react";
import { useLang } from "../i18n/LanguageContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <div className="container contact">
      <h3>{t.contact.title}</h3>
      <p>
        Mail : <a href={`mailto:${t.contact.mail}`}>{t.contact.mail}</a>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(t.contact.messageSent);
        }}
      >
        <label>
          Message
          <textarea name="message" required />
        </label>
        <button type="submit">{t.contact.button}</button>
      </form>
    </div>
  );
}
