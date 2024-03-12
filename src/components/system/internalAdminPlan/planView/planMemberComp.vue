<template>
  <v-card>
    <v-card-title>
      <h4 class="mt-1 mb-3 ml-3">計畫人員投入百分比: 100%</h4>
    </v-card-title>
    <v-card-text>
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left" colspan="4">
              <label class="form-label"> 院內人員 </label>
            </th>
          </tr>
          <tr>
            <th class="text-left bg-thead thead" width="5%">No.</th>
            <th class="text-left bg-thead thead" width="20%">姓名</th>
            <th class="text-left bg-thead thead" width="20%">單位</th>
            <th class="text-left bg-thead thead" width="10%">投入百分比</th>
            <th class="text-left bg-thead thead" width="45%">備註</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.deptName }}</td>
            <td>{{ item.member }}</td>
            <td>{{ item.percent }}</td>
            <td>{{ item.comments }}</td>
          </tr>
        </tbody>
      </v-table>
      <v-divider class="border-opacity-25"></v-divider>
      <v-table density="compact">
        <thead>
          <tr>
            <th class="text-left" colspan="4">
              <label class="form-label"> 院外人員 </label>
            </th>
          </tr>
          <tr>
            <th class="text-left bg-thead thead" width="5%">No.</th>
            <th class="text-left bg-thead thead" width="20%">姓名</th>
            <th class="text-left bg-thead thead" width="20%">單位</th>
            <th class="text-left bg-thead thead" width="10%">投入百分比</th>
            <th class="text-left bg-thead thead" width="45%">備註</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.deptName }}</td>
            <td>{{ item.member }}</td>
            <td>{{ item.percent }}</td>
            <td>{{ item.comments }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    selectItem: {},
  },
  components: {},
  data() {
    return {
      targetItem: {},

      tableData: [
        {
          deptName: '國家環境醫學研究所',
          member: '郭育良',
          memberTitle: '合聘研究員',
        },
        {
          deptName: '國家環境醫學研究所',
          member: '林嬪嬪',
          memberTitle: '研究員兼代理所長',
        },
        {
          deptName: '國家環境醫學研究所',
          member: '黃嘯谷',
          memberTitle: '特聘研究員',
        },
        {
          deptName: '國家環境醫學研究所',
          member: '劉紹興',
          memberTitle: '研究員',
        },
        {
          deptName: '國家環境醫學研究所',
          member: '王淑麗',
          memberTitle: '研究員',
        },
        {
          deptName: '國家環境醫學研究所',
          member: '鄒粹軍',
          memberTitle: '研究員',
        },
        {
          deptName: '國家環境醫學研究所',
          member: '李立安',
          memberTitle: '研究員',
        },
      ],
    };
  },
  methods: {
    handleClose() {
      this.$emit('childDialog');
    },
  },
  mounted() {
    console.log('mounted');
    this.targetItem = this.selectItem;
  },
  created() {},
};
</script>

<script></script>
