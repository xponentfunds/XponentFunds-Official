// src/components/ReturnsRefundsPolicy.jsx

import React from "react";

const ReturnsRefundsPolicy = () => {
  return (
    <section className=" bg-black ">
      <div className=" text-white font-poppins container mx-auto px-5 md:px-5 lg:px-10 py-24 md:py-32">
        <h1 className="text-4xl font-bold mb-4">Returns & Refunds Policy</h1>

        <p className="mb-4">
          You are entitled to cancel your order before 24hrs of the webinar
          without giving any reason.
        </p>

        <p className="mb-4">
          In order to exercise your right of cancellation, you must inform us of
          your decision by means of a clear statement.
        </p>

        <p className="mb-4">
          You can inform us of your decision by e-mailing{" "}
          <a href="mailto:refund@xponentfunds.com" className="text-blue-400">
            refund@xponentfunds.com
          </a>
        </p>

        <p className="mb-4">
          We will not reimburse you if your refund request is received after
          (24hrs before the webinar) policy. We will use the same means of
          payment as you used for the order, and you will not incur any fees for
          such reimbursement. The refund check will be processed within the next
          24hrs and after that money will be settled in the next 3 - 4 days
          depending on your bank speed.
        </p>

        <h2 className="text-2xl font-bold mb-2">Conditions for returns:</h2>

        <p className="mb-4">
          In order for the money to be eligible for a return, please make sure
          that:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            The refund request was made on this email only (
            <a href="mailto:refund@xponentfunds.com" className="text-blue-400">
              refund@xponentfunds.com
            </a>
            ), any messages on other emails or other platforms will not be
            accepted.
          </li>
          <li>
            The refund request has to be made before 24hrs of starting the
            webinar. That means if the webinar is starting on 15 Jan at 6 pm,
            then you are eligible to send a refund request till 14 Jan at 5 pm,
            after that no refund request will be accepted.
          </li>
        </ul>

        <p className="mb-4">
          We reserve the right to refuse returns of any refund that does not
          meet the above return conditions at our sole discretion.
        </p>

        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

        <p>
          If you have any questions about our Returns and Refunds Policy, please
          contact us by e-mail at{" "}
          <a href="mailto:refund@xponentfunds.com" className="text-blue-400">
            refund@xponentfunds.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default ReturnsRefundsPolicy;
