import React, { memo, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import BoilerPlateActions from "../../redux/BoilerPlateActions";

import "./../styles/boiler-plate-container.scss";

const BoilerPlateContainer = (props) => {
  const styles = {
    container: "ev__boiler-plate__main-container",
    innerContainer: "ev__boiler-plate__inner-container",
    image: "ev__boiler-plate__image",
    adder: "ev__boiler-plate__adder",
    plate: "ev__boiler-plate__plate",
  };

  useEffect(() => {
    props.getData();
  }, [props, props.getData]);

  const onCookClick = () => {
    props.setCookingState(true);
  };

  const getImage = (item, i) => (
    <Fragment key={item.id}>
      <img className={styles.image} src={item.img} alt="" />
      {i < props.boilerPlateData.items.length - 1 && (<div className={styles.adder}>+</div>)}
    </Fragment>
  );

  const getPlate = (plate) => (
    <img className={styles.plate} src={plate.img} alt="" />
  );

  const getCookingButton = () => (
    <button onClick={onCookClick}>Start Cooking</button>
  );

  const getContent = () => (
    <Fragment>
      <div className={styles.innerContainer}>
        {props.boilerPlateData.items && props.boilerPlateData.items.map(getImage)}
      </div>
      <div className={styles.innerContainer}>
        {props.boilerPlateData.isCooking ?
          getPlate(props.boilerPlateData.plate) : getCookingButton()}
      </div>
    </Fragment>
  );

  return (
    <div className={styles.container}>
      {props.boilerPlateData.items && getContent()}
    </div>
  );
};

BoilerPlateContainer.propTypes = {
  boilerPlateData: PropTypes.object,

  getData: PropTypes.func.isRequired,
  setCookingState: PropTypes.func.isRequired,
};

BoilerPlateContainer.defaultProps = {
  boilerPlateData: {},
};

const mapStateToProps = state => ({
  boilerPlateData: state.BoilerPlateReducer,
});

const mapDispatchToProps = dispatch => ({
  getData: () => {
    dispatch(BoilerPlateActions.getData());
  },

  setCookingState: payload => {
    dispatch(BoilerPlateActions.setCookingState(payload));
  },
});

export default memo(connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoilerPlateContainer));
