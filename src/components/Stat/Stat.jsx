import css from './Stat.module.css';
import PropTypes from 'prop-types';

const randomRgbaColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ', 0.4)';
};

const Stat = ({ data, title }) => {
  return (
    <section className={css.statSection}>
      {title && (
        <div className={css.titleWrap}>
          <h2 className={css.title}>{title}</h2>
        </div>
      )}
      <ul className={css.statList}>
        {data.map(({ id, label, percentage }) => (
          <li
            className={css.statItem}
            key={id}
            style={{ background: randomRgbaColor() }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stat.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Stat;
