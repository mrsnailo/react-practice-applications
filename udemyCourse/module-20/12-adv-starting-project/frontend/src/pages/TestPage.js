export default function TestPage() {
  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
          color: "#333333",
          lineHeight: 1.5,
        }}
      >
        <p style={{ fontSize: "14px", fontWeight: "bold", margin: 0 }}>
          Shahid Parvez
        </p>
        <p style={{ margin: "5px 0" }}>Support Engineer, TubeOnAI LLC</p>
        <p style={{ margin: "5px 0" }}>
          <strong>O:</strong> 833-955-1054 | <strong>C:</strong> +8801756500984
        </p>
        <p style={{ margin: "5px 0" }}>
          <strong>Website:</strong>{" "}
          <a
            href="http://www.tubeonai.com"
            style={{ color: "#1155cc", textDecoration: "none" }}
          >
            www.tubeonai.com
          </a>{" "}
          | <strong>Email:</strong>{" "}
          <a
            href="mailto:s.parvez@tubeonai.com"
            style={{ color: "#1155cc", textDecoration: "none" }}
          >
            s.parvez@tubeonai.com
          </a>
        </p>
      </div>

      <div
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "11px",
          color: "#555555",
          lineHeight: 1.4,
          marginTop: "15px",
          borderTop: "1px solid #cccccc",
          paddingTop: "10px",
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>Confidentiality Notice:</strong>
        </p>
        <p style={{ margin: "5px 0" }}>
          This email may contain confidential information or information covered
          under the Privacy Act, 5 USC 552(a), and its various implementing
          regulations and must be protected in accordance with those provisions.
          It contains information that is legally privileged, confidential, or
          otherwise protected from use or disclosure. This email message,
          including any attachments, is for the sole use of the intended
          recipient(s). Any unauthorized review, use, disclosure, or
          distribution is prohibited. You, the recipient, are obligated to
          maintain it in a safe, secure, and confidential manner. If you are not
          the intended recipient, please contact the sender by reply email and
          destroy all copies of the original message. Thank you.
        </p>
      </div>
    </>
  );
}
