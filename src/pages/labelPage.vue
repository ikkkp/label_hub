<template>
    <div class="maincontainer">
        <!-- 使用插槽内容替代默认内容 -->
        <mainContainer>
            <template #asideContent>
                <asideContent></asideContent>
            </template>
            <template #mainContent>
                <labelForm></labelForm>
            </template>
        </mainContainer>
    </div>
</template>

<script setup>
import mainContainer from '@/components/mainContainer.vue';
import asideContent from '@/layout/asideContent.vue';
import labelForm from '@/components/labelComponents/labelForm.vue';
</script>

<style scoped lang="less">
.maincontainer {
    height: 100%;
}
</style>