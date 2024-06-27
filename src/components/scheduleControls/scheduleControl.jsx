// import React, { useState } from "react";
// import "./scheduleControl.css";
// import calenderIcon from "../../assets/TableBooking_Icon/calender_icon.png";
// import clockIcon from "../../assets/TableBooking_Icon/clock_icon.png";
// import peopleIcon from "../../assets/TableBooking_Icon/person_icon.png";

// const ScheduleControl = () => {
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [people, setPeople] = useState(1);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [showTimePicker, setShowTimePicker] = useState(false);
//   const [showPeoplePicker, setShowPeoplePicker] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleSubmit = () => {};

//   const handleChangeStatus = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   //   console.log(selectedOption);
//   const togglePeoplePicker = () => {
//     setShowPeoplePicker((prev) => !prev);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="picker-container">
//         <div className="picker">
//           <button
//             className="picker-button"
//             onClick={() => setShowDatePicker(!showDatePicker)}
//           >
//             <img
//               src={calenderIcon}
//               alt="calenderIcon"
//               className="picker-icon"
//             />{" "}
//             Date
//           </button>
//           {showDatePicker && (
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => {
//                 setDate(e.target.value);
//                 setShowDatePicker(false);
//               }}
//               className="picker-input"
//             />
//           )}
//         </div>

//         <div className="picker">
//           <button
//             className="picker-button"
//             onClick={() => setShowTimePicker(!showTimePicker)}
//           >
//             <img src={clockIcon} alt="clockIcon" className="picker-icon" /> Time
//           </button>
//           {showTimePicker && (
//             <input
//               type="time"
//               value={time}
//               onChange={(e) => {
//                 setTime(e.target.value);
//                 setShowTimePicker(false);
//               }}
//               className="picker-input"
//             />
//           )}
//         </div>

//         <div className="picker">
//           <button
//             className="picker-button"
//             onClick={() => setShowPeoplePicker(!showPeoplePicker)}
//           >
//             <img src={peopleIcon} alt="peopleIcon" className="picker-icon" />{" "}
//             People
//           </button>

//           {showPeoplePicker && (
//             <div className="picker-dropdown">
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <div
//                   key={num}
//                   onClick={() => {
//                     setPeople(num);
//                     setShowPeoplePicker(false);
//                   }}
//                   className="picker-item"
//                 >
//                   {num} {num === 1 ? "Person" : "People"}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="picker">
//           <label>
//             <input
//               className="radioInput"
//               type="radio"
//               value="In"
//               checked={selectedOption === "In"}
//               onChange={handleChangeStatus}
//             />
//             In
//           </label>
//           <label>
//             <input
//               className="radioInput"
//               type="radio"
//               value="Out"
//               checked={selectedOption === "Out"}
//               onChange={handleChangeStatus}
//             />
//             Out
//           </label>
//         </div>
//         <button type="submit" className="scheduleBtn">
//           Find Slots
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ScheduleControl;
