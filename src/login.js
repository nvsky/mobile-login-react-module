const React = require('react');
const classNames = require('classnames');

function noop() {

}

const Login = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    prefixCls: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    msg: React.PropTypes.string,
    getCode: React.PropTypes.func,
    getLogin: React.PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'rc-login',
      disabled: false,
      className: '',
      msg: '',
      getCode: noop,
      getLogin: noop,
    };
  },
  getInitialState() {
    return {
      codeButtonContent: '获取验证码'
    };
  },
  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked,
      });
    }
  },
  checkCode() {
    if (this.refs.phoneValue.value && /^1\d{10}$/.test(this.refs.phoneValue.value)) {
      this.refs.codeButton.setAttribute('disabled', 'true');
      this.refs.codeButton.style.opacity = 0.6;
      this.setState({
        msg: ''
      });
      this.props.getCode();
      let num = 60;
      const interval = setInterval(()=> {
        if (num > 0) {
          num--;
          this.setState({
            codeButtonContent: '(' + num + 's)重新获取'
          });
        } else {
          this.refs.codeButton.style.opacity = 1;
          this.refs.codeButton.removeAttribute('disabled');
          this.setState({
            codeButtonContent: '获取验证码'
          });
          clearInterval(interval);
        }
      }, 1000);
    } else {
      this.setState({
        msg: '请输入正确手机号'
      });
    }
  },
  checkLogin() {
    if (/^1\d{10}$/.test(this.refs.phoneValue.value) && this.refs.codeValue.value) {
      this.props.getLogin(this.refs.phoneValue.value, this.refs.codeValue.value);
      this.setState({
        msg: ''
      });
    } else {
      if (!/^1\d{10}$/.test(this.refs.phoneValue.value)) {
        this.setState({
          msg: '请输入正确手机号'
        });
      } else {
        this.setState({
          msg: '请输入正确的验证码'
        });
      }
    }
  },
  render() {
    const {
      prefixCls,
      disabled,
      ...restProps
    } = this.props;
    const seccondInput = classNames({
      [`${prefixCls}-input`]: true,
      [`${prefixCls}-bottom-none`]: true,
    });
    return (
      <div {...restProps}>
        <div className={prefixCls}>
          <div className={`${prefixCls}-input`}>
            <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAuCAYAAAA/SqkPAAAAAXNSR0IArs4c6QAAAj5JREFUWAntmL9OG0EQxrn1uQou4groEgkZIegRlHYBNInkKsoD+CRbSkN696ShMLafgAJocZ0mSUOVmMhu8gQxBXT+l98cd6fNCmNb3ELBnTSa2dnd79v9bk+6HWdBe6rVqspms2ktFVvY6/X64I9CQEeCWq22qJQ6cBxnD8uEnXH68Xh8g7VGo9GXcrl86zSbTdnhCVaMk+gBrHP6PrjD4XA7lUoJaZ8VHeGv8L4SD0yeqwsVx0xYx3/CF+HccmmsCQpkHc/zPkts62k0GrvwbWDrCpLwMMnLd22RBtj9AD/NmVIiwwKriFXe+zYQcgin7PhZnoT4yWRPpE6ktqZAcrisSWsCJ1KbilhrJ1Jbk9YETqQ2FbHWfuFSt9tt/x/bhr4m9rNJrV9ZVvP5/NdCoWBl18FFcDVUUyd+xRVjJ+yI25s3pIiYFV3T2cJHt/Y4ycFWYMvF/7XgRsQk/pRKpY9xkplYFAEuyf1PTELJVRIbmBPMdr1e35HSheQHg8EhpYVv5hizHVxTo8McBebASW1WvQzpKf3vxVzXPaWGsjRp/KT83MTs8A1gyxrgCvFbrT1TODcxB6QDcldD7wY5LTU9VJR//EoAk2f6fiuVyl9g3zH8WEziIDeVLeQQToeDUuKdNUj+oviyOXX2IwZQfPnJ17MBsSdVn9+Chc/RcUhos9yUEy42eSXE34ml6FUk9j8RvPRbeSA9o672w2cIS4pIvg9bBpvpfc+xMuG5QeIL7K6kqE/mI3+yIuo/gfPM3mfmZX8AAAAASUVORK5CYII=" />
            </div>
            <input type="tel" placeholder="请输入手机号" ref="phoneValue" />
            <button onClick={this.checkCode} ref="codeButton">{this.state.codeButtonContent}</button>
          </div>
          <div className={seccondInput}>
            <div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAmCAYAAACh1knUAAAAAXNSR0IArs4c6QAABYhJREFUWAm9l39oVWUYx+/d3F1tS1OTbaEbBRJFGRSZRGVt2FqY0B+DSI3+sO52111UEFFWN38UIiSs/YxM2kQkAtGRijQQKqlBQRhJ+IdTqzsol+kqtrt71+d79p7bObvnznPvdb3wnud9nvf58X2f932fc04gUGCLxWJFuAgW6KYwB729vTVTU1MdgEgFg8G2cDh8Ll9Aea1EWaisrFxfVFS0jcA1Jvi5VCr1WktLyz74qVwB5Qok2NXVVQ+AV8jAGgUjIylReG2R2rFkMrkzEol8Ps36e/oC0t7evjQUCjXgcgMBV0NtuzMAeYFMBIuLi9uR15qwyshx5HsTicSxtra2n408K7EcstclrKJicnJyHu06nC9m1TcR9A76Kqzvoi+yvTA/zvhj6Ba24hfJDdg3GT6NTalkpo2i9y2yr+FPEmOY8QXoZWJNsoAxzlbCBrIJ5a0oFKNcRi83TlwEnQsIBqDdABhyTRqmu7t7JYuIoLMWf4u9dJD9Rf8bnSQ6bwDkw3lGcSGCKtsIBd2CCehFqFb8PWlWqo+3traet/W8qAE41NnZuYzVPozOQ/hYAV1KX4DPELwWWg6FBBbqYQOxDhx8AsWNKJwmdZdI3cV4PD7KLbHnZeOrGcB9KPfpllVXVy/CtxasrV8O7WeuhG75toFYzlGQ8DtSddoSXKWHWcjvuFMP9PT0XFYskxErin3lLMY8hHKuW0YMLyBzDcLTv2trPDUKELIl11CBN3HePotGo2dmczVnGREIDugervL7FMMBalX1/w7EBkHgJ03wG7j6ziKXgemqZ8QDRBwQ66gvwxnRHQJfQHDuV8/aDvzbmYgzfiJbFXbgCFwpQJCSHWavT1Ap73Eazhx7ZUIgqEnfzNT14mcF0tHRcRuHrQfDeynXh/gEeMDLSaEg5NMFhEpnFX87GOxZxvvFM64C1AGq4hp7XjQfEFxnhbJjJeXHAkK5HRVDK+Fgpd+YvC/GxsfHn0H+kSax1dyngHlcfD4gZEd2l0BCGhPbKvsWEIKfMu+ZIKvWt0e68VEzzosvzHynhICZT98PmA2cnQ8QuQ6mnzNBjLvlSzH5DvpJYwsIqfoR59brHfqYJpyNlU+OjIy0YbjTyMvQ09tzo+Gt2+EHBPpB/DTKDh/a+lPWWA81VtjLxHMo/UNfyZX7YXrG/eQWxVjRWw5pLiACHPgV2A8Rq5Q4Xc3Nza3ylT6spEiffjpF16IYcQRyDQEYQ+9VCaEjEN9XVDb4ft6AUKw+ydTsk2uNycoRJhsIMAa9j1SftLQ8HqysEZ3z2TLnYaKs34nNCebKiHGYbKxlrA/t/zIiAYd2OwpCWgG/o6mpqVhKXo3fhSO5gDC+duBL38T6EnwHaoGQ//TWiMH5F5C9GtMa6+rqWqaHhT/r6+u1JQ3yBIg+FvGV06sLiCb4D3kdRfsGvUs6H3Qa5DNmG1cDYruxPct53DzTTwYQPmB+RSlK16d+Bb2f98ytMw398tyy2zmguurl2nZ6lEKpQ+5qGUA0yyE6iIG9ghoq4QE5dFn6YPgY0g/aQfoyo74V3wNepp5ApDg4OLgFMHs0xtEt9MM4fkS8n8aWPoq9buHN0me8m6K4LZut8/pm6PAbWcpn3m6crTfO9Kv53sTExC5K/28ZBgiwWYLNy9i8CBsyOv28s57V68LLRrJZgUiB8h6qqqraheN0kWN1w/R99KMa8yMW5ADWchZUW57CrFa2asx3komX8DMxLfF+XhGIbca2qBQrtdfbMkP/NHSBUw6AP+A3cya6nPJsY99A5ECHjwAxhutYebZfkQTzh+hvz1aZmXe1nIDYltSFVWxDE/z9ALpRcgDq2n8J/4nPt7DM0i0vIGlrzhhZmi+e4Jcg6ZLt0PE1/BdpXHLQyUpeDwAAAABJRU5ErkJggg==" /></div>
            <input type="text" placeholder="请输入短信验证码" ref="codeValue" />
          </div>
        </div>
        <div className={`${prefixCls}-submit`} onClick={this.checkLogin}>
          登录
        </div>
        <div>
          <p style={{textAlign: 'center', color: 'red'}} >{this.state.msg}</p>
        </div>
      </div>
    );
  },
});

module.exports = Login;
