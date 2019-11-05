import Vue from 'vue';

const STATUS = {
  stop: '정지',
  pause: '일시정지',
  run: '일시정지',
};

Vue.filter('status', (value) => {
  return STATUS[value];
});

const GUIDE_STATUS = [
  { status: 'stop', label: '정지' },
  { status: 'pause', label: '일시정지' },
  { status: 'run', label: '운영' },
]

Vue.filter('tochelinStatus', (value) => {
  const item = GUIDE_STATUS.find(el => el.status === value);
  return item.label;
});
