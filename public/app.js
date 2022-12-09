const root = document.querySelector('#root');
function App() {
  const [unit, sumUnit] = React.useState('');
  const [jumlah, setUnit] = React.useState('');
  const [jumlah2, setUnit2] = React.useState('');
  const [dropdown, setDropdown] = React.useState('');
  const [dropdown2, setDropdown2] = React.useState('');
  const [required, setRequired] = React.useState("required");
  function addTodoHandler(event) {
    event.preventDefault();
    {/* <option value="micrometer">milimiter</option>
                        <option value="milimeter">meter</option>
                        <option value="inch">foot</option>
                        <option value="inch">yard</option> */}
    setUnit({
      id: generateId(),
      unit: dropdown == "meter" ? unit * 1000 : dropdown == "milimeter" ? unit * 10 : dropdown == "nanometer" ? unit * 1000 : dropdown == "micrometer" ? unit * 1000 : dropdown == "milimeter" ? unit * 1000000 : dropdown == "inch" ? unit * 12 : dropdown == "inch" ? unit * 36 : unit,
      unit2: dropdown == "meter" ? "kilometer is " : dropdown == "milimeter" ? "centimeter is " : dropdown == "nanometer" ? "micrometer is " : dropdown == "micrometer" ? "milimeter is " : dropdown == "milimeter" ? "nanometer is " : dropdown == "inch" ? "foot is " : dropdown == "inch2" ? "yard is " : dropdown == ""
    });
    setUnit2({
      id: generateId(),
      unit
    });
    setDropdown2({
      dropdown
    });
    setRequired({
      required: "required"
    });
  }
  function generateId() {
    return Date.now();
  }
  function removeUnitNumber() {
    sumUnit('');
    setUnit('');
    setUnit2('');
    setDropdown('');
    setDropdown2('');
    setRequired('');
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "box"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("div", {
    className: "group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "numInput1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "amount"
  }, "Amount"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "numInput",
    value: unit,
    onChange: function (event) {
      sumUnit(event.target.value);
    },
    required: required.required
  }), /*#__PURE__*/React.createElement("span", {
    className: "highlight"
  }), /*#__PURE__*/React.createElement("span", {
    className: "bar"
  }), /*#__PURE__*/React.createElement("label", {
    className: "label",
    style: unit !== "" ? {
      opacity: "0"
    } : {
      opacity: "1"
    }
  }, "Enter Number"))), /*#__PURE__*/React.createElement("div", {
    className: "group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement("select", {
    className: "textInput",
    value: dropdown,
    onChange: function (e) {
      setDropdown(e.target.value);
    },
    required: required.required
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "choose an option--"), /*#__PURE__*/React.createElement("option", {
    value: "meter"
  }, "kilometer"), /*#__PURE__*/React.createElement("option", {
    value: "milimeter"
  }, "centimeter"), /*#__PURE__*/React.createElement("option", {
    value: "nanometer"
  }, "micrometer"), /*#__PURE__*/React.createElement("option", {
    value: "micrometer"
  }, "milimiter"), /*#__PURE__*/React.createElement("option", {
    value: "inch"
  }, "foot"))), /*#__PURE__*/React.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "textInput",
    placeholder: dropdown,
    readOnly: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "buttonSection"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "button"
  }, "CONVERT")), /*#__PURE__*/React.createElement("div", {
    className: "buttonSection"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "button",
    onClick: removeUnitNumber
  }, "CLEAR")), /*#__PURE__*/React.createElement("div", {
    className: "answer"
  }, /*#__PURE__*/React.createElement("h1", {
    key: jumlah2.id
  }, jumlah2.unit, " ", jumlah.unit2, jumlah.unit, " ", dropdown2.dropdown), /*#__PURE__*/React.createElement("h1", null)))));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);