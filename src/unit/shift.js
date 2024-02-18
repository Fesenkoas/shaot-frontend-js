export const shift = [
  {
    dayDate: "2023-08-26",
    dayName: "SUNDAY",
    shifts: [
      {
        shiftName: "2023-08-27T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: ["Alex", "Stas", "Oden"],
      },
      {
        shiftName: "2023-08-27T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-08-27T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: ["Alex", "Stas"],
      },
    ],
  },
  {
    dayDate: "2023-08-27",
    dayName: "MONDAY",
    shifts: [
      {
        shiftName: "2023-08-28T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-08-28T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: ["Stas"],
      },
      {
        shiftName: "2023-08-28T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: [],
      },
    ],
  },
  {
    dayDate: "2023-08-28",
    dayName: "TUESDAY",
    shifts: [
      {
        shiftName: "2023-08-29T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: ["Stas"],
      },
      {
        shiftName: "2023-08-29T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-08-29T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: ["Stas"],
      },
    ],
  },
  {
    dayDate: "2023-08-29",
    dayName: "WEDNESDAY",
    shifts: [
      {
        shiftName: "2023-08-30T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-08-30T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: ["Stas"],
      },
      {
        shiftName: "2023-08-30T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: [],
      },
    ],
  },
  {
    dayDate: "2023-08-30",
    dayName: "THURSDAY",
    shifts: [
      {
        shiftName: "2023-08-31T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: ["Alex", "Stas"],
      },
      {
        shiftName: "2023-08-31T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-08-31T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: ["Stas"],
      },
    ],
  },
  {
    dayDate: "2023-08-31",
    dayName: "FRIDAY",
    shifts: [
      {
        shiftName: "2023-09-01T04:00:00",
        shiftStart: "04:00:00",
        shiftEnd: "12:00:00",
        workerNames: [],
      },
      {
        shiftName: "2023-09-01T12:00:00",
        shiftStart: "12:00:00",
        shiftEnd: "20:00:00",
        workerNames: ["Stas"],
      },
      {
        shiftName: "2023-09-01T20:00:00",
        shiftStart: "20:00:00",
        shiftEnd: "04:00:00",
        workerNames: [],
      },
    ],
  },
  {
    dayDate: "2023-09-01",
    dayName: "SATURDAY",
    shifts: [],
  },
];

export const settingTable = [
  {
    weekStart: "2023-08-27",
    weekEnd: "2023-09-02",
    shiftsTime: [
      {
        start: "07:00:00",
        end: "15:00:00",
        workersNumberPerShift: 3,
      },
      {
        start: "15:00:00",
        end: "23:00:00",
        workersNumberPerShift: 3,
      },
      {
        start: "23:00:00",
        end: "07:00:00",
        workersNumberPerShift: 3,
      },
    ],
    workDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    pointAlarm: "thursday",
  },
];

export const employeeShift = [
  {
    dayDate: "2023-08-27",
    dayName: "SUNDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-08-28",
    dayName: "MONDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-08-29",
    dayName: "TUESDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-08-30",
    dayName: "WEDNESDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-08-31",
    dayName: "THURSDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-09-01",
    dayName: "FRIDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "SATURDAY",
    shifts: [
      { shiftTime: "07:00:00", change: 1 },
      { shiftTime: "15:00:00", change: 1 },
      { shiftTime: "23:00:00", change: 1 },
    ],
  },
];

export const shift_v_2 = [
  {
    dayDate: "2023-09-02",
    dayName: "SUNDAY",
    shifts: [
      { shiftStart: "05:00:00", shiftEnd: "13:00:00", workerNeeded: 3 },
      { shiftStart: "13:00:00", shiftEnd: "21:00:00", workerNeeded: 3 },
      { shiftStart: "21:00:00", shiftEnd: "05:00:00", workerNeeded: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "MONDAY",
    shifts: [
      { shiftStart: "05:00:00", shiftTime: "13:00:00", workerNeeded: 3 },
      // { shiftStart: "13:00:00", shiftEnd: "21:00:00", workerNeeded: 3 },
      { shiftStart: "21:00:00", shiftEnd: "05:00:00", workerNeeded: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "TUENSDAY",
    shifts: [
      { shiftStart: "05:00:00", shiftTime: "13:00:00", workerNeeded: 3 },
      { shiftStart: "13:00:00", shiftEnd: "21:00:00", workerNeeded: 3 },
      { shiftStart: "21:00:00", shiftEnd: "05:00:00", workerNeeded: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "WEDNESDAY",
    shifts: [
      { shiftStart: "05:00:00", shiftTime: "13:00:00", workerNeeded: 3 },
      { shiftStart: "13:00:00", shiftEnd: "21:00:00", workerNeeded: 3 },
      { shiftStart: "21:00:00", shiftEnd: "05:00:00", workerNeeded: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "THURSDAY",
    shifts: [
      { shiftStart: "05:00:00", shiftTime: "13:00:00", workerNeeded: 3 },
      { shiftStart: "13:00:00", shiftEnd: "21:00:00", workerNeeded: 3 },
      { shiftStart: "21:00:00", shiftEnd: "05:00:00", workerNeeded: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "FRIDAY",
    shifts: [
      { shiftStart: "05:00:00", shiftTime: "13:00:00", workerNeeded: 3 },
      { shiftStart: "13:00:00", shiftEnd: "21:00:00", workerNeeded: 3 },
      { shiftStart: "21:00:00", shiftEnd: "05:00:00", workerNeeded: 3},
    ],
  },
  {
    dayDate: "2023-09-02",
    dayName: "SATURDAY",
    shifts: [
      { shiftStart: "05:00:00", shiftTime: "13:00:00", workerNeeded: 3 },
      { shiftStart: "13:00:00", shiftEnd: "21:00:00", workerNeeded: 3 },
      { shiftStart: "21:00:00", shiftEnd: "05:00:00", workerNeeded: 3},
    ],
  },
];

// dayDate: "2024-02-16";
// dayName: "Sunday";
// shiftEnd: "13:00:00";
// shiftStart: "05:00:00";
// workerNeeded: 3;
