export const COLOR_OPTIONS = [
    { label: 'Red', value: '#e44444' },
    { label: 'Green', value: '#1cec7f' },
    { label: 'Blue', value: '#5d69e5' },
    { label: 'Yellow', value: '#FCE23C' },
    { label: 'Purple', value: '#9090d8' },
    { label: 'Pink', value: '#f48fb6' },
  ];

export const trailColorForHabit = (color: string) => {
    switch (color) {
      case '#e44444':
        return '#a83232';
      case '#1cec7f':
        return '#128d54';
      case '#5d69e5':
        return '#3a46b3';
      case '#9acd32':
        return '#6e8c22';
      case '#9090d8':
        return '#5e5eaa';
      case '#f48fb6':
        return '#b35678'; 
      default:
        return '#7a7a7a'; 
    }
  };