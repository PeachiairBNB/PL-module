import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search.jsx";
import Ratings from "./components/Ratings.jsx";
import ReviewList from "./components/ReviewList.jsx";
import axios from "axios";

class ReviewsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      listingId: 1,
      avgAccuracy: null,
      avgCommunication: null,
      avgCleanliness: null,
      avgLocation: null,
      avgCheckIn: null,
      avgValue: null,
      overallRating: null
    };
    this.handleStarRating = this.handleStarRating.bind(this);
  }
  componentDidMount() {
    // render reviews for current listing
    this.getReviews(this.state.listingId);
    this.getRatings(this.state.listingId);
  }

  getReviews(listingId) {
    axios
      .get(`/api/items/${listingId}`)
      .then(res => {
        this.setState({
          reviews: res.data,
          listingId: listingId
        });
      })
      .catch(err => {
        console.error(
          `error getting reviews from listing id ${listingId}`,
          err
        );
      });
  }

  getRatings(listingId) {
    axios
      .get(`/api/items/${listingId}`)
      .then(res => {
        this.setState({
          avgAccuracy:
            res.reduce((sum, review) => {
              return sum + review.accuracy;
            }, 0) / res.length,
          avgCommunication:
            res.reduce((sum, review) => {
              return sum + review.communication;
            }, 0) / res.length,
          avgCleanliness:
            res.reduce((sum, review) => {
              return sum + review.cleanliness;
            }, 0) / res.length,
          avgLocation:
            res.reduce((sum, review) => {
              return sum + review.location;
            }, 0) / res.length,
          avgCheckIn:
            res.reduce((sum, review) => {
              return sum + review.checkin;
            }, 0) / res.length,
          avgValue:
            res.reduce((sum, review) => {
              return sum + review.value;
            }, 0) / res.length,
          overallRating:
            (this.state.avgAccuracy +
              this.state.avgCommunication +
              this.state.avgCleanliness +
              this.state.avgLocation +
              this.state.avgCheckIn +
              this.state.avgValue) /
            6
        });
      })
      .catch(err => {
        console.error(
          `error getting ratings from listing id ${listingId}`,
          err
        );
      });
  }

  handleStarRating(avgRating) {
    var roundRating = Math.round(avgRating * 2) / 2;
    if (roundRating === 0) {
      return (
        <span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        </span>
      );
    } else if (roundRating === 0.5) {
      return (
        <span>
          <span className="_odm2ne">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        </span>
      );
    } else if (roundRating === 1.0) {
      return (
        <span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        </span>
      );
    } else if (roundRating === 1.5) {
      return (
        <span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_odm2ne">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        </span>
      );
    } else if (roundRating === 2.0) {
      return (
        <span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        </span>
      );
    } else if (roundRating === 2.5) {
      return (
        <span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_odm2ne">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        </span>
      );
    } else if (roundRating === 3.0) {
      return (
        <span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        </span>
      );
    } else if (roundRating === 3.5) {
      return (
        <span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_odm2ne">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        </span>
      );
    } else if (roundRating === 4.0) {
      return (
        <span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_103pkch3">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        </span>
      );
    } else if (roundRating === 4.5) {
      return (
        <span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_odm2ne">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M510.2 23.3l1 767.3-226.1 172.2c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L58 447.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7.1-23.1 28.1-39.1 52.1-39.1z" />
            </svg>
          </span>
        </span>
      );
    } else if (roundRating === 5.0) {
      return (
        <span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
          <span className="_1cb248s8">
            <svg
              viewBox="0 0 1000 1000"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentColor"
              }}
            >
              <path d="M971.5 379.5c9 28 2 50-20 67L725.4 618.6l87 280.1c11 39-18 75-54 75-12 0-23-4-33-12l-226.1-172-226.1 172.1c-25 17-59 12-78-12-12-16-15-33-8-51l86-278.1L46.1 446.5c-21-17-28-39-19-67 8-24 29-40 52-40h280.1l87-278.1c7-23 28-39 52-39 25 0 47 17 54 41l87 276.1h280.1c23.2 0 44.2 16 52.2 40z" />
            </svg>
          </span>
        </span>
      );
    }
  }

  render() {
    return (
      <div id="reviews">
        <div>
          <section>
            {/* <Search /> */}
            <div>
              {/* <Ratings /> */}
              <ReviewList reviews={this.state.reviews} />
              {/* Pages */}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ReviewsModule />, document.getElementById("app"));
