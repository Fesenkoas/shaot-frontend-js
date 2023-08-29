export const shift = [
  {
    day: [
      {
        shiftName: "2023-08-28T07:00:00",
        dayDate: "2023-08-28",
        dayName: "monday",
        shiftStart: "07:00:00",
        shiftEnds: "15:00:00",
        workerNames: ["Vitaly"],
      },
      {
        shiftName: "2023-08-28T15:00:00",
        dayName: "2023-08-28",
        shiftStart: "15:00:00",
        shiftEnds: "23:00:00",
        workerNames: ["Oleg"],
      },
    ],
  },
  {
    day: [
      {
        shiftName: "2023-08-29T07:00:00",
        dayName: "2023-08-29",
        shiftStart: "07:00:00",
        shiftEnds: "15:00:00",
        workerNames: ["Vitaly"],
      },
      {
        shiftName: "2023-08-29T15:00:00",
        dayName: "2023-08-29",
        shiftStart: "15:00:00",
        shiftEnds: "23:00:00",
        workerNames: [],
      },
    ],
  },
  {
    day: [
      {
        shiftName: "2023-08-30T07:00:00",
        dayName: "2023-08-30",
        shiftStart: "07:00:00",
        shiftEnds: "15:00:00",
        workerNames: ["Vitaly"],
      },
      {
        shiftName: "2023-08-30T15:00:00",
        dayName: "2023-08-30",
        shiftStart: "15:00:00",
        shiftEnds: "23:00:00",
        workerNames: [],
      },
    ],
  },
  {
    day: [
      {
        shiftName: "2023-08-31T07:00:00",
        dayName: "2023-08-31",
        shiftStart: "07:00:00",
        shiftEnds: "15:00:00",
        workerNames: ["Vitaly"],
      },
      {
        shiftName: "2023-08-31T15:00:00",
        dayName: "2023-08-31",
        shiftStart: "15:00:00",
        shiftEnds: "23:00:00",
        workerNames: ["Oleg", "Alex"],
      },
    ],
  },
  {
    day: [
      {
        shiftName: "2023-09-01T07:00:00",
        dayName: "2023-09-01",
        shiftStart: "07:00:00",
        shiftEnds: "15:00:00",
        workerNames: ["Vitaly", "Alex"],
      },
      {
        shiftName: "2023-09-01T15:00:00",
        dayName: "2023-09-01",
        shiftStart: "15:00:00",
        shiftEnds: "23:00:00",
        workerNames: [],
      },
    ],
  },
  {
    day: [
      {
        shiftName: "2023-09-02T07:00:00",
        dayName: "2023-09-02",
        shiftStart: "07:00:00",
        shiftEnds: "15:00:00",
        workerNames: ["Vitaly"],
      },
      {
        shiftName: "2023-09-02T15:00:00",
        dayName: "2023-09-02",
        shiftStart: "15:00:00",
        shiftEnds: "23:00:00",
        workerNames: ["Oleg", "Alex"],
      },
    ],
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
    workDays: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    pointAlarm: "thursday",
  },
];
