const arr = [
  {
    title: '属性',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      //序号 index  复选框 selection
      // { type: 'selection' },
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明', width: '300px' },
      { prop: 'paramsType', label: '类型' },
      { prop: 'value', label: '可选值' },
      { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'columns',
        desc: '表头参数,必传',
        paramsType: 'Array',
        value: '--',
        defaultValue: '[] '
      },
      {
        name: 'data',
        desc: '显示的数据',
        paramsType: 'Array',
        value: '--',
        defaultValue: '[]'
      },
      {
        name: 'border',
        desc: '是否带有纵向边框',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'total',
        desc: '表格数据总数,默认为 0 ,分页组件不展示',
        paramsType: 'number',
        value: '--',
        defaultValue: '0'
      },
      {
        name: 'pageParams',
        desc: '分页参数',
        paramsType: 'object',
        value: '--',
        defaultValue: ' { current: 1, size: 10 } '
      },
      {
        name: 'height',
        desc:
          'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。',
        paramsType: 'string/number ',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'max-height',
        desc: 'Table 的最大高度。合法的值为数字或者单位为 px 的高度',
        paramsType: ' string/number',
        value: '--',
        defaultValue: '-- '
      },
      {
        name: 'stripe',
        desc: '是否为斑马纹 table',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: 'size',
        desc: ' Table 的尺寸 ',
        paramsType: 'string',
        value: ' medium / small / mini',
        defaultValue: '--'
      },
      {
        name: 'fit',
        desc: '列的宽度是否自撑开 ',
        paramsType: 'boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'show-header',
        desc: '是否显示表头',
        paramsType: 'boolean',
        value: '--',
        defaultValue: ' true '
      },
      {
        name: 'highlight-current-row',
        desc: '是否要高亮当前行 ',
        paramsType: 'boolean ',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: ' current-row-key',
        desc: '当前行的 key，只写属性 ',
        paramsType: 'String,Number ',
        value: '--',
        defaultValue: '-- '
      },
      {
        name: ' row-class-name',
        desc: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className',
        paramsType: 'Function({row, rowIndex})/String',
        value: '--',
        defaultValue: '--'
      },
      {
        name: ' row-style',
        desc: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style',
        paramsType: ' Function({row, rowIndex})/Object ',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'cell-class-name',
        desc: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className',
        paramsType: ' Function({row, column, rowIndex, columnIndex})/String',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'cell-style',
        desc: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style',
        paramsType: ' Function({row, column, rowIndex, columnIndex})/Object',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'header-row-class-name',
        desc: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className',
        paramsType: ' Function({row, rowIndex})/String ',
        value: '--',
        defaultValue: '--'
      },
      {
        name: ' header-row-style',
        desc: ' 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style',
        paramsType: 'Function({row, rowIndex})/Object',
        value: '--',
        defaultValue: '-- '
      },
      {
        name: ' header-cell-class-name ',
        desc: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className',
        paramsType: ' Function({row, column, rowIndex, columnIndex})/String',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'header-cell-style',
        desc: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style  ',
        paramsType: 'Function({row, column, rowIndex, columnIndex})/Object',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'row-key',
        desc:
          '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function ',
        paramsType: 'Function(row)/String',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'empty-text',
        desc: '空数据时显示的文本内容，也可以通过 slot="empty" 设置',
        paramsType: 'String',
        value: '--',
        defaultValue: ' 暂无数据 '
      },
      {
        name: ' default-expand-all',
        desc: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效',
        paramsType: 'Boolean',
        value: '--',
        defaultValue: ' false '
      },
      {
        name: 'expand-row-keys',
        desc: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组',
        paramsType: 'array ',
        value: '--',
        defaultValue: '[]'
      },
      {
        name: ' default-sort  ',
        desc: '默认的排序列的 prop 和顺序。它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序',
        paramsType: ' Object',
        value: 'order: ascending, descending',
        defaultValue: ' 如果只指定了 prop, 没有指定 order, 则默认顺序是 ascending'
      },
      {
        name: 'tooltip-effect',
        desc: 'tooltip effect 属性',
        paramsType: 'String({row, column, rowIndex, columnIndex})/Object',
        value: 'dark/light',
        defaultValue: '--'
      },
      {
        name: 'show-summary',
        desc: '是否在表尾显示合计行',
        paramsType: 'Boolean',
        value: '--',
        defaultValue: 'false'
      },
      {
        name: ' sum-text',
        desc: '合计行第一列的文本',
        paramsType: 'string',
        value: '--',
        defaultValue: ' 合计 '
      },
      {
        name: 'summary-method',
        desc: '自定义的合计计算方法  ',
        paramsType: 'Function({ columns, data }) ',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'span-method ',
        desc: '合并行或列的计算方法',
        paramsType: ' Function({ row, column, rowIndex, columnIndex })',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'select-on-indeterminate',
        desc: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行',
        paramsType: 'Boolean',
        value: '--',
        defaultValue: 'true'
      },
      {
        name: 'indent',
        desc: '展示树形数据时，树节点的缩进',
        paramsType: 'Function(row)/String',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'lazy',
        desc: '是否懒加载子节点数据 ',
        paramsType: 'Boolean',
        value: '--',
        defaultValue: ' -- '
      },
      {
        name: 'load',
        desc: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息   ',
        paramsType: 'Function(row, treeNode, resolve) ',
        value: '--',
        defaultValue: '--'
      },
      {
        name: 'tree-props',
        desc: ' 渲染嵌套数据的配置选项   ',
        paramsType: 'Object ',
        value: '--',
        defaultValue: "{ hasChildren: 'hasChildren', children: 'children' }"
      },
      {
        name: 'columnSortable',
        desc: '列是否可拖拽',
        paramsType: 'Boolean ',
        value: 'false',
        defaultValue: 'false'
      },
      {
        name: 'rowSortable',
        desc: ' 行是否可拖拽   ',
        paramsType: 'Boolean ',
        value: 'false',
        defaultValue: 'false'
      },
      {
        name: 'checkTreeSelect(gd-check-table独有)',
        desc: '开启树形结构表格选择',
        paramsType: 'Boolean ',
        value: '--',
        defaultValue: "false"
      },
      {
        name: 'checkRow',
        desc: 'checkbox在第几列，默认在第一列(gd-check-table独有)',
        paramsType: 'String,Number',
        value: '--',
        defaultValue: "1"
      },
      {
        name: 'checkStrictly',
        desc: '是否严格模式遵循父子关联关系(gd-check-table独有)',
        paramsType: 'Boolean ',
        value: '--',
        defaultValue: "false"
      },
      {
        name: 'indeterminate',
        desc: '半选中的checkbox字段(gd-check-table独有)',
        paramsType: 'String ',
        value: '--',
        defaultValue: "indeterminate"
      },
      {
        name: 'checkedRow',
        desc: '选中的checkbox字段(gd-check-table独有)',
        paramsType: 'String ',
        value: '--',
        defaultValue: "checkedRow"
      }
    ]
  },
  {
    title: '方法',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数' },
      { prop: 'desc', label: '说明', width: '300px' },
      { prop: 'params', label: '参数' },
      { prop: 'method', label: '使用方式' }
      // { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'pagination',
        desc: '分页参数抛出',
        params: '--',
        method: '@pagination="pagination"'
      },
      {
        name: 'clearSelection',
        desc: '用于多选表格，清空用户的选择',
        params: '--',
        method: "this.$refs.['refname'].$refs.table.clearSelection() "
      },
      {
        name: 'toggleRowSelection',
        desc: '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）',
        params: 'row, selected',
        method: '同上'
      },
      {
        name: 'toggleAllSelection',
        desc: '用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）',
        params: '--',
        method: '同上'
      },
      {
        name: 'toggleRowExpansion',
        desc: '分页参数抛出',
        params: 'row, expanded',
        method: '同上'
      },
      {
        name: 'setCurrentRow',
        desc: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态',
        params: 'row',
        method: '同上'
      },
      {
        name: 'clearSort',
        desc: ' 用于清空排序条件，数据会恢复成未排序的状态',
        params: '--',
        method: '同上'
      },
      {
        name: 'clearFilter',
        desc: '不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由 columnKey 组成的数组以清除指定列的过滤条件',
        params: 'columnKey',
        method: '同上'
      },
      {
        name: 'doLayout',
        desc: '对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法',
        params: '--',
        method: '同上'
      },
      {
        name: 'sort',
        desc: '手动对 Table 进行排序。参数 prop 属性指定排序列，order 指定排序顺序。',
        params: 'prop: string, order: string',
        method: '同上'
      },
      {
        name: 'on-column-sort',
        desc: '列拖拽的回调函数',
        params: 'tableColumns'
      },
      {
        name: 'on-row-sort',
        desc: '行拖拽的回调函数',
        params: 'tableData'
      },
      {
        name: 'setCheckedKeys',
        desc: '手动设置 tableData 初始化选中数组 有两种方式。[1,2,3] || [{id: 1,name: \'aa\'}]',
        params: '',
        method: '同上(gd-check-table独有)'
      },
      {
        name: 'onChangeCheckbox(row1, row2, row3,row4,row5)',
        desc: '返回参数，row1为所有选中状态的数据, [{id: 1, name: \'aa\'},{id: 2, name: \'bb\'}]， row2所有半选中状态的数据, [{id: 3, name: \'cc\'},{id: 4, name: \'dd\'}],row3为所有选中状态的数据只有rowKey值, [1,2,3]，row4为所有半选中状态的数据只有rowKey值, [4,5,6]，row5为原始树形数组',
        params: '',
        method: '同上(gd-check-table独有)'
      },
      {
        name: 'getCheckedData()',
        desc: '返回参数与onChangeCheckbox()方法相同。具体用法可看例子。',
        params: '',
        method: '用法this.$refs.[yourTableRef].getCheckedData()'
      }
    ]
  },
  {
    title: 'Table Slot 插槽',
    border: true,
    stripe: false,
    //表头数据
    tableColumn: [
      { prop: 'name', label: '参数', width: '213px' },
      { prop: 'desc', label: '说明' }
      // { prop: 'paramsType', label: '类型' },
      // { prop: 'value', label: '可选值' },
      // { prop: 'defaultValue', label: '默认值' }
    ],
    //内容
    tableData: [
      {
        name: 'append',
        desc: '插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上',
        paramsType: 'string',
        value: '--',
        defaultValue: '--'
      }
      // {
      //   name: 'iconType',
      //   desc: '如果是本地 svg，需要传 local，默认不传',
      //   paramsType: 'string',
      //   value: '--',
      //   defaultValue: '--'
      // }
    ]
  }
]

module.exports = arr
