import css from './Stat.module.css';
import PropTypes from 'prop-types';

const randomRgbColor = () => {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return 'rgb(' + r + ',' + g + ',' + b + ', 0.4)';
};

const Stat = ({ data, title }) => {
  return (
    <section className={css.statSection}>
      <div className={css.titleWrap}>
        <h2 className={css.title}>{title}</h2>
      </div>

      <ul className={css.statList}>
        {data.map(item => (
          <li
            className={css.statItem}
            key={item.id}
            style={{ background: randomRgbColor() }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stat.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Stat;
