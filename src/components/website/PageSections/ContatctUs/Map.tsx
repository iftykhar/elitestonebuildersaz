import React from "react";

export default function Map() {
  return (
    <div className="container mx-auto w-full h-[400px] md:h-[600px] lg:h-[50vh] md:py-15  overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d860040.8009926263!2d-115.7716670968134!3d32.64522101737294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1762111963202!5m2!1sen!2sbd"
        className="w-full h-full border-0 rounded-2xl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
