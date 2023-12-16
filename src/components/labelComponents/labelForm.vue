<template>
    <el-form :model="form" label-width="120px">

        <el-form-item label="项目ID">
            <el-col :span="6">
                <el-input v-model="form.id" />
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="2">
                <el-button type="primary" @click="onSearch()">搜索问题</el-button>
            </el-col>
        </el-form-item>

        <el-form-item label="问题">
            <el-col :span="16">
                <el-input v-model="form.question" type="textarea" disabled :rows="4" />
            </el-col>
        </el-form-item>

        <el-form-item label="错误答案">
            <el-col :span="16">
                <el-input v-model="form.wrong_answer" type="textarea" :rows="4" />
            </el-col>
        </el-form-item>

        <el-form-item label="错误步骤">
            <el-select v-model="form.step" placeholder="Select">
                <el-option label="第一步" value="1" />
                <el-option label="第二步" value="2" />
            </el-select>
        </el-form-item>

        <el-form-item label="错误类型">
            <el-cascader v-model="form.error_type" :options="options" />
        </el-form-item>

        <el-form-item label="错误分析">
            <el-col :span="16">
                <el-input v-model="form.analysis" type="textarea" :rows="6" />
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="2">
                <el-button type="primary" @click="onAnalysis()">生成原因</el-button>
            </el-col>
        </el-form-item>

        <el-form-item label="错误总结">
            <el-col :span="16" style="align-self: end;">
                <el-input v-model="form.summary" type="textarea" :rows="6" />
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="2" style="align-self: end;">
                <el-button type="primary" @click="onSummary()">生成总结</el-button>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-col :span="17"></el-col>
            <el-col :span="4">
                <el-button type="primary" @click="onNext()">下一题</el-button>
                <el-button type="warning" @click="onCancel()">取消</el-button>
            </el-col>
        </el-form-item>

    </el-form>
</template>
  
<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
    id: '',
    question: '',
    wrong_answer: '',
    error_type: '',
    analysis: '',
    summary: '',
    step:''
})

const options = reactive([
    {
        label: "计算错误",
        value: "calculate",
        children: [
            {
                label: "代数",
                value: "algebra"
            },
            {
                label: "正负不分",
                value: "sign"
            },
            {
                label: "单位转换",
                value: "unit"
            },
            {
                label: "值错误",
                value: "number"
            },
        ]
    },
    {
        label: "概念错误",
        value: "concept",
        children: [
            {
                label: "方程设立错误",
                value: "equation"
            },
            {
                label: "错误格式",
                value: "format"
            },
            {
                label: "概念遗忘",
                value: "forget"
            },
        ]
    },
    {
        label: "阅读错误",
        value: "reading",
        children: [
            {
                label: "理解错误",
                value: "understand"
            },
            {
                label: "重复",
                value: "repeat"
            },
        ]
    },
    {
        label: "解题错误",
        value: "solving",
        children: [
            {
                label: "解题步骤不完整",
                value: "incomplete"
            },
            {
                label: "结论错误",
                value: "conclusion"
            },
            {
                label: "猜答案",
                value: "guessing"
            },
        ]
    }
]);


const onNext = () => {
    console.log(form)
}

</script>

<style scoped lang="less"></style>
  