import React    from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null, };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value:'X'})} >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          <Square value='8' />
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>

      </div>


    );
  }
}

class MoodyNews extends React.Component {

  constructor() {
    super();
    this.state = {
      hl_datetime_0 : "",
      hl_headline_0 : "",
      a_headline_0  : "",
      a_url_0       : "",
      a_source_0    : "",

      hl_datetime_1 : "",
      hl_headline_1 : "",
      a_headline_1  : "",
      a_url_1       : "",
      a_source_1    : "",

      hl_datetime_2 : "",
      hl_headline_2 : "",
      a_headline_2  : "",
      a_url_2       : "",
      a_source_2    : "",

      hl_datetime_3 : "",
      hl_headline_3 : "",
      a_headline_3  : "",
      a_url_3       : "",
      a_source_3    : "",

      hl_datetime_4 : "",
      hl_headline_4 : "",
      a_headline_4  : "",
      a_url_4       : "",
      a_source_4    : "",
    };
  }

  renderHeadline(i) {
    return <div className="label-headline">{this.state.hl_data[i].headline}</div>;
  }

  componentDidMount() {
    fetch('http://ec2-18-236-64-67.us-west-2.compute.amazonaws.com:3000/headlines')
    .then ( results => { return results.json(); } )
    .then ( data    => {
      console.log (data.length);
      console.log (data[0]);

      this.setState ({
        hl_date_0     : data[0].date,
        hl_time_0     : data[0].time,
        hl_datetime_0 : data[0].datetime,
        hl_headline_0 : data[0].headline,
        a_headline_0  : data[0].a_headline,
        a_url_0       : data[0].a_url,
        a_source_0    : data[0].a_source,

        hl_date_1     : data[1].date,
        hl_time_1     : data[1].time,
        hl_datetime_1 : data[1].datetime,
        hl_headline_1 : data[1].headline,
        a_headline_1  : data[1].a_headline,
        a_url_1       : data[1].a_url,
        a_source_1    : data[1].a_source,

        hl_date_2     : data[2].date,
        hl_time_2     : data[2].time,
        hl_datetime_2 : data[2].datetime,
        hl_headline_2 : data[2].headline,
        a_headline_2  : data[2].a_headline,
        a_url_2       : data[2].a_url,
        a_source_2    : data[2].a_source,

        hl_date_3     : data[3].date,
        hl_time_3     : data[3].time,
        hl_datetime_3 : data[3].datetime,
        hl_headline_3 : data[3].headline,
        a_headline_3  : data[3].a_headline,
        a_url_3       : data[3].a_url,
        a_source_3    : data[3].a_source,

        hl_date_4     : data[4].date,
        hl_time_4     : data[4].time,
        hl_datetime_4 : data[4].datetime,
        hl_headline_4 : data[4].headline,
        a_headline_4  : data[4].a_headline,
        a_url_4       : data[4].a_url,
        a_source_4    : data[4].a_source,
      });

/*
      let pictures = data.results.map((pic) => {
        return(
          <div key={pic.results}>
          </div>
        )
      })
*/
      //console.log(this.state.hl_data);
    })
  }


  render() {

    return (
      /*
      <div className="rectangle2">
        <div className="rectangle1">
          <div className="label-header">MOODY NEWS</div>
          <div className="label-time">6:00pm</div>
          <div className="label-headline">{this.state.hl_headline_0}</div>
          <div className="dotted-line"></div>
          <div className="label-article-headline">{this.state.a_headline_0}</div>
        </div>
        <div className="rectangle1">
          <div className="label-header">MOODY NEWS</div>
          <div className="label-time">6:00pm</div>
          <div className="label-headline">{this.state.hl_headline_1}</div>
          <div className="dotted-line"></div>
          <div className="label-article-headline">{this.state.a_headline_1}</div>
        </div>
        <div className="rectangle1">
          <div className="label-header">MOODY NEWS</div>
          <div className="label-time">6:00pm</div>
          <div className="label-headline">{this.state.hl_headline_2}</div>
          <div className="dotted-line"></div>
          <div className="label-article-headline">{this.state.a_headline_2}</div>
        </div>
        <div className="rectangle1">
          <div className="label-header">MOODY NEWS</div>
          <div className="label-time">6:00pm</div>
          <div className="label-headline">{this.state.hl_headline_3}</div>
          <div className="dotted-line"></div>
          <div className="label-article-headline">{this.state.a_headline_3}</div>
        </div>
        <div className="rectangle1">
          <div className="label-header">MOODY NEWS</div>
          <div className="label-time">6:00pm</div>
          <div className="label-headline">{this.state.hl_headline_4}</div>
          <div className="dotted-line"></div>
          <div className="label-article-headline">{this.state.a_headline_4}</div>
        </div>
      </div>
      */

      <div className="rectangle-background">
        <div className="header-row">
          <div className="label-menu-bar"></div>
          <div className="label-menu">Menu</div>
          <div className="label-header-1">MOODY NEWS</div>
        </div>
        <div className="rectangle-headline">
          <div className="datetime_row">
            <div className="label-time">{this.state.hl_time_0}</div>
            <div className="label-date">{this.state.hl_date_0}</div>
          </div>
          <div className="label-headline">{this.state.hl_headline_0}</div>
          <div className="dotted-line"></div>
          <div className="article-row">
            <div className="article-source"></div>
            <div className="label-article-headline">{this.state.a_headline_0}</div>
          </div>
          <div className="reactions-row">
            <div className="reaction-button">Paradise City</div>
            <div className="reaction-button">Love in the Air</div>
            <div className="reaction-button">Get Canned Foods</div>
            <div className="reaction-button">Go in Bunker</div>
          </div>
        </div>
        <div className="rectangle-headline">
          <div className="datetime_row">
          <div className="label-time">{this.state.hl_time_1}</div>
          <div className="label-date">{this.state.hl_date_1}</div>
          </div>
          <div className="label-headline">{this.state.hl_headline_1}</div>
          <div className="dotted-line"></div>
          <div className="article-row">
            <div className="article-source"></div>
            <div className="label-article-headline">{this.state.a_headline_1}</div>
          </div>
          <div className="reactions-row">
            <div className="reaction-button">Paradise City</div>
            <div className="reaction-button">Love in the Air</div>
            <div className="reaction-button">Get Canned Foods</div>
            <div className="reaction-button">Go in Bunker</div>
          </div>
        </div>
        <div className="rectangle-headline">
          <div className="datetime_row">
          <div className="label-time">{this.state.hl_time_2}</div>
          <div className="label-date">{this.state.hl_date_2}</div>
          </div>
          <div className="label-headline">{this.state.hl_headline_2}</div>
          <div className="dotted-line"></div>
          <div className="article-row">
            <div className="article-source"></div>
            <div className="label-article-headline">{this.state.a_headline_2}</div>
          </div>
          <div className="reactions-row">
            <div className="reaction-button">Paradise City</div>
            <div className="reaction-button">Love in the Air</div>
            <div className="reaction-button">Get Canned Foods</div>
            <div className="reaction-button">Go in Bunker</div>
          </div>
        </div>
        <div className="rectangle-headline">
          <div className="datetime_row">
          <div className="label-time">{this.state.hl_time_3}</div>
          <div className="label-date">{this.state.hl_date_3}</div>
          </div>
          <div className="label-headline">{this.state.hl_headline_3}</div>
          <div className="dotted-line"></div>
          <div className="article-row">
            <div className="article-source"></div>
            <div className="label-article-headline">{this.state.a_headline_3}</div>
          </div>
          <div className="reactions-row">
            <div className="reaction-button">Paradise City</div>
            <div className="reaction-button">Love in the Air</div>
            <div className="reaction-button">Get Canned Foods</div>
            <div className="reaction-button">Go in Bunker</div>
          </div>
        </div>
        <div className="rectangle-headline">
          <div className="datetime_row">
          <div className="label-time">{this.state.hl_time_4}</div>
          <div className="label-date">{this.state.hl_date_4}</div>
          </div>
          <div className="label-headline">{this.state.hl_headline_4}</div>
          <div className="dotted-line"></div>
          <div className="article-row">
            <div className="article-source"></div>
            <div className="label-article-headline">{this.state.a_headline_4}</div>
          </div>
          <div className="reactions-row">
            <div className="reaction-button">Paradise City</div>
            <div className="reaction-button">Love in the Air</div>
            <div className="reaction-button">Get Canned Foods</div>
            <div className="reaction-button">Go in Bunker</div>
          </div>
        </div>


      </div>

    );
  }
}

// ========================================

ReactDOM.render(
  <MoodyNews />,
  document.getElementById('root')
);
