function getDirectionProps(prefix) {
  const rules = [];

  if (prefix) {
    rules.push(prefix);
    prefix = prefix + '-';
  } else {
    prefix = '';
  }

  return [...rules, `${prefix}top`, `${prefix}bottom`, `${prefix}left`, `${prefix}right`];
}

function getMinMaxProps(postfix) {
  return [postfix, `min-${postfix}`, `max-${postfix}`];
}

function getStartEndProps(prefix) {
  return [prefix, `${prefix}-start`, `${prefix}-end`];
}

function getColumnsRowsProps(prefix) {
  return [`${prefix}-columns`, `${prefix}-rows`];
}

function getArrangeProps(prefix) {
  return [`${prefix}-content`, `${prefix}-items`, `${prefix}-self`];
}

function getBorderProps(infix) {
  if (infix) {
    infix = `-${infix}`;
  } else {
    infix = '';
  }

  return [
    `border${infix}`,
    `border${infix}-width`,
    `border${infix}-style`,
    `border${infix}-color`,
    `border${infix}-radius`,
  ];
}

const flexProps = ['flex', 'flex-basis', 'flex-direction', 'flex-flow', 'flex-grow', 'flex-shrink', 'flex-wrap'];

const gridProps = [
  'grid-area',
  'grid-auto-flow',
  'grid-template',
  'grid-template-areas',
  ...getColumnsRowsProps('grid-template'),
  ...getColumnsRowsProps('grid-auto'),
  ...getStartEndProps('grid-column'),
  ...getStartEndProps('grid-row'),
];

const outlineProps = ['outline-style', 'outline-color', 'outline-width', 'outline-offset', 'outline'];

const positioning = ['position', ...getDirectionProps(), 'z-index', 'transform'];

const displayAndBoxModel = [
  'display',
  'box-sizing',
  ...flexProps,
  ...gridProps,
  ...getArrangeProps('justify'),
  ...getArrangeProps('align'),
  'gap',
  'grid-gap',
  'order',
  ...getDirectionProps('margin'),
  ...getDirectionProps('padding'),
  ...getMinMaxProps('width'),
  ...getMinMaxProps('height'),
  ...getBorderProps(),
  ...getBorderProps('top'),
  ...getBorderProps('right'),
  ...getBorderProps('bottom'),
  ...getBorderProps('left'),
  ...outlineProps,
  'background',
  'background-color',
  'opacity',
  'overflow',
  'overflow-x',
  'overflow-y',
];

const fonts = ['font-family', 'font-style', 'font-weight', 'font-size', 'line-height', 'text-decoration', 'color'];

const animations = [
  'transition',
  'animation',
  'animation-name',
  'animation-duration',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'animation-fill-mode',
  'animation-play-state',
  'animation-timeline',
  'will-change',
];

module.exports = {
  plugins: 'stylelint-order',
  rules: {
    'order/properties-order': [...positioning, ...displayAndBoxModel, ...fonts, ...animations],
  },
};
