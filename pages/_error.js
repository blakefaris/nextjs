import React from "react";
import Error from "next/error";

export default class CustomError extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <div>
        <div>
          <p>This is an overridden error page.</p>
          {statusCode === 404 ? (
            <div>
              You probably need to run the app using:
              <pre>npm run devWithServer</pre>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* NOTE: blake.faris - can still bring in the Next error as well */}
        <Error statusCode={statusCode} />

        {/* NOTE: blake.faris - can set global and even the shitty !important */}
        <style jsx global>{`
          div {
            justify-content: unset !important;
          }
        `}</style>

        {/* NOTE: blake.faris - component scoped styling */}
        <style jsx>{`
          div,
          p {
            font-family: "-apple-system", "BlinkMacSystemFont", "Roboto",
              "Segoe UI", "Fira Sans", "Avenir", "Helvetica Neue",
              "Lucida Grande", "sans-serif";
            font-size: 1.1em;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
