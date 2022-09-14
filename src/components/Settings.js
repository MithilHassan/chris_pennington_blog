import pattern0 from "../assets/pattern/pattern-1.svg";
import pattern1 from "../assets/pattern/pattern-2.svg";
import pattern2 from "../assets/pattern/pattern-3.svg";
import pattern3 from "../assets/pattern/pattern-4.svg";
import pattern4 from "../assets/pattern/pattern-5.svg";
import pattern5 from "../assets/pattern/pattern-6.svg";
import pattern6 from "../assets/pattern/pattern-7.svg";
import pattern7 from "../assets/pattern/pattern-8.svg";
import pattern8 from "../assets/pattern/pattern-9.svg";
import pattern9 from "../assets/pattern/pattern-10.svg";
import pattern10 from "../assets/pattern/pattern-11.svg";
function Settings(props) {
  const patterns = [
    pattern0,
    pattern1,
    pattern2,
    pattern3,
    pattern4,
    pattern5,
    pattern6,
    pattern7,
    pattern8,
    pattern9,
    pattern10,
  ];
  const { setBackground, settingsActive, setSettingsActive } = props;
  return (
    <div className={settingsActive ? "active container" : "container"}>
      <div className="settings">
        <div className="box">
          <div className="box-header">
            <div className="box-title">
              <p>Display Settings</p>
            </div>
            <div className="close-btn">
              <button onClick={() => setSettingsActive(false)}></button>
            </div>
            <div className="header-lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="box-body">
          <p>
            Choose a background pattern. I’ll save your selection in your
            device’s local cache so it’ll chill until you pick another pattern
            or clear your cache. Eventually, I'd like to let you set your own
            custom patterns, choose colors for the site, etc.
          </p>
          <div className="pattern-container">
            {patterns.map((pattern, index) => (
              <div
                key={index}
                onClick={() => setBackground(pattern)}
                className="pattern"
                style={{ backgroundImage: `url(${pattern})` }}
              ></div>
            ))}
          </div>
          <p>Classic or colorized?</p>
          <div className="color-switcher">
            <button className="active classic">Classic</button>
            <button className="colorized">Colorized</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
