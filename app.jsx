var App = React.createClass({
    render: function() {
        return (
            <div className="content">
                <h1>Hello world</h1>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
