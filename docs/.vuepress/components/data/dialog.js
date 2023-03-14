const arr = [
  {
    title: '属性',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明', width: '300px' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'title',
        desc: '标题文字, 为 null 时即不显示头部',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'icon',
        desc: '标题旁边的图标样式名称',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'width',
        desc: '窗体宽度',
        paramsType: 'string',
        value: '--',
        defaultValue: 'auto'
      },
      {
        name: 'height',
        desc: '窗体高度',
        paramsType: 'string',
        value: '--',
        defaultValue: 'auto'
      },
      {
        name: 'left',
        desc: '窗体左位置，inline 为 true 是无效， left、top 同时为 null 时，自动居中',
        paramsType: 'string',
        value: '--',
        defaultValue: 'null'
      },
      {
        name: 'top',
        desc: ' 窗体顶位置，inline 为 true 是无效， left、top 同时为 null 时，自动居中',
        paramsType: 'string',
        value: '--',
        defaultValue: 'null'
      },
      {
        name: 'closable',
        desc: '是否显示关闭按钮',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'collapsible',
        desc: '是否显示折叠按钮',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'maximizable',
        desc: '是否显示最大化按钮',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'minimizable',
        desc: '是否显示最小化按钮',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'closed',
        desc: '是否关闭状态，支持 sync 修饰符进行双向绑定',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'collapsed',
        desc: '是否折叠收起状态，支持 sync 修饰符进行双向绑定',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'minimized',
        desc: '是否最小化状态，支持 sync 修饰符进行双向绑定',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'maximized',
        desc: ' 是否最大化状态，支持 sync 修饰符进行双向绑定',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'modal',
        desc: '是否显示遮罩层，inline 为 true 是无效',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'draggable',
        desc: '窗体支持拖拽配置参数, 参数对象参考 v-draggable',
        paramsType: ' boolean/Object',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'resizable',
        desc: ' 窗体支持改变尺寸配置参数, 参数对象参考 v-resizable',
        paramsType: 'Boolean/Object',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'headerHeight',
        desc: '头部高度',
        paramsType: 'string',
        value: '--',
        defaultValue: '40px'
      },
      {
        name: 'footerHeight',
        desc: '底部高度',
        paramsType: ' string',
        value: '--',
        defaultValue: '40px'
      },
      {
        name: 'z-index',
        desc: ' 窗体层级',
        paramsType: 'Number',
        value: '--',
        defaultValue: '1000'
      },
      {
        name: 'shadow',
        desc: '是否显示窗体阴影',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'inline',
        desc: '是否以内联方式显示',
        paramsType: ' boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'themeColor',
        desc: '头部颜色',
        paramsType: 'string',
        value: '--',
        defaultValue: '#1f2949'
      },
      {
        name: 'size',
        desc: '尺寸大小',
        paramsType: ' string',
        value: '--',
        defaultValue: 'big（800px）、default（600px）、small（400px）'
      }
    ]
  },
  {
    title: '插槽',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明', width: '300px' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'default',
        desc: '窗体内容',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'title',
        desc: '定义标题内容，设置了改插槽，参数 title 将无效',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'tools',
        desc: '定义操作按钮',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'footer',
        desc: '定义底部内容',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      }
    ]
  },
  {
    title: '事件',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明', width: '300px' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'on-start-drag',
        desc: '开始拖拽时触发',
        paramsType: 'Even',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'on-stop-drag',
        desc: '拖拽结束时触发',
        paramsType: 'Even',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'on-drag',
        desc: '正在拖拽时触发',
        paramsType: 'Even',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'on-minimized',
        desc: '最小化时触发',
        paramsType: 'Even',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'on-maximized',
        desc: '最大化时触发',
        paramsType: 'Even',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'on-closed',
        desc: '窗体关闭触发',
        paramsType: 'Even',
        value: '--',
        defaultValue: '--'
      }
    ]
  }
]

module.exports = arr
