import MyInfo from "../MyInfo";

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.5283499407015!2d24.943481515850783!3d60.16741768195835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df5902f475dff%3A0x3b1a3e2d2ed961aa!2sRauhankatu%2041%2C%2000170%20Helsinki%2C%20Finland!5e0!3m2!1sen!2sfi!4v1620480089249!5m2!1sen!2sfi"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="Helsinki, Finland" />
        <MyInfo field="email" value="matias901zhang@gmail.com" />
        <MyInfo field="freelance" value="Available" />
      </ul>
    </div>
  );
}
