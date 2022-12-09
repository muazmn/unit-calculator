const root = document.querySelector('#root');

function App() {
    const [unit, sumUnit] = React.useState('');
    const [jumlah, setUnit] = React.useState('');
    const [jumlah2, setUnit2] = React.useState('');
    const [dropdown, setDropdown] = React.useState('');
    const [dropdown2, setDropdown2] = React.useState('');
    const [required, setRequired] = React.useState("required")

    function addTodoHandler(event) {
        event.preventDefault();

        {/* <option value="micrometer">milimiter</option>
                            <option value="milimeter">meter</option>
                            <option value="inch">foot</option>
                            <option value="inch">yard</option> */}

        setUnit({
            id: generateId(),
            unit: dropdown == "meter" ? unit * 1000 :
                dropdown == "milimeter" ? unit * 10 :
                    dropdown == "nanometer" ? unit * 1000 :
                        dropdown == "micrometer" ? unit * 1000 :
                            dropdown == "milimeter" ? unit * 1000000 :
                                dropdown == "inch" ? unit * 12 :
                                    dropdown == "inch" ? unit * 36 :
                                        unit,
            unit2: dropdown == "meter" ? "kilometer is " :
                dropdown == "milimeter" ? "centimeter is " :
                    dropdown == "nanometer" ? "micrometer is " :
                        dropdown == "micrometer" ? "milimeter is " :
                            dropdown == "milimeter" ? "nanometer is " :
                                dropdown == "inch" ? "foot is " :
                                    dropdown == "inch2" ? "yard is " :
                                        dropdown == ""

        });
        setUnit2({
            id: generateId(), unit
        });
        setDropdown2({
            dropdown
        })
        setRequired({ required: "required" })

    }
    function generateId() {
        return Date.now();
    }
    function removeUnitNumber() {
        sumUnit('')
        setUnit('')
        setUnit2('')
        setDropdown('')
        setDropdown2('')
        setRequired('')
    }

    return (
        <section className="box">
            <form onSubmit={addTodoHandler}>
                <div className="group">
                    <div className="numInput1">
                        <p className="amount">Amount</p>
                        <input type="number"
                            className="numInput"
                            value={unit}
                            onChange={function (event) {
                                sumUnit(event.target.value);
                            }} required={required.required} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label className="label" style={unit !== "" ? { opacity: "0" } : { opacity: "1" }}>Enter Number</label>
                    </div>
                </div>
                <div className="group">
                    <div className="dropdown">
                        <select className="textInput"
                            value={dropdown}
                            onChange={function (e) {
                                setDropdown(e.target.value);
                            }} required={required.required}>
                            <option value="">choose an option--</option>
                            <option value="meter">kilometer</option>
                            <option value="milimeter">centimeter</option>
                            <option value="nanometer">micrometer</option>
                            <option value="micrometer">milimiter</option>
                            <option value="inch">foot</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <input type="text" className="textInput" placeholder={dropdown} readOnly />

                    </div>
                    <div className="buttonSection">
                        <button type="submit" className="button">CONVERT</button>
                    </div>
                    <div className="buttonSection">
                        <button type="submit" className="button" onClick={removeUnitNumber}>CLEAR</button>
                    </div>
                    <div className="answer">
                        <h1 key={jumlah2.id}>{jumlah2.unit} {jumlah.unit2}{jumlah.unit} {dropdown2.dropdown}</h1>
                        <h1></h1>
                    </div>
                </div>
            </form>
        </section>
    )
}
ReactDOM.render(<App />, root)