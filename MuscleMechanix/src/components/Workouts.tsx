import React from 'react';

export function Workouts() {
  const workouts = useWorkouts();

  React.useEffect(() => {
    workouts.get();
  }, []);

  return <div>Workouts</div>;
}

type Workouts = {
  get: () => Promise<Array<WorkoutDto>>;
};

type WorkoutDto = {};

function useWorkouts(): Workouts {
  async function get(): Promise<Array<WorkoutDto>> {
    return fetch('http://localhost:3000/test')
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error('test:::useWorkout() err: ', err);
      });
  }

  return {
    get,
  };
}
