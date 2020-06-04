import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";






















const putStateOnProps = (reduxState) => ({ reduxState });
export default withRouter(connect(putStateOnProps)(ViewFav));