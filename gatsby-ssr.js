const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link rel="stylesheet" href="https://use.typekit.net/gyc5wys.css" />
  ])
}
