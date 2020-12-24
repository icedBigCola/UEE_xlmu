<template>
    <div class="topbar-container">
        <!-- header -->
        <div class="header">
            <!-- <div class="toggle-btn" @click="toggleSidebar">
                <i class="fa fa-navicon"></i>
            </div> -->
             <TagsView></TagsView>
            <div class="header-right">
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
            </div>
        </div>
        <!-- 标签页 -->
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    // import BreadCrumd from './breadCrumd'
    import TagsView from './tagsView'

    export default {
        data() {
            return {
                fullscreen: false
            }
        },
        components: {
            TagsView
        },
        computed: {
            ...mapState({
                isCollapse: (state) => state.common.isCollapse
            })
        },
        methods: {
            ...mapActions(['toggleSidebar']),
            // 全屏事件
            handleFullScreen() {
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .topbar-container {
        width: 100%;
        height: 40px;
        margin: 0;
        background-color: #fff;
        .header {
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ccc;
            position: relative;
            text-align: left;
            .toggle-btn {
                display: inline-block;
                padding: 0 20px;
            }

            .header-right {
                position: absolute;
                top: 0;
                right: 20px;
                height: 50px;
                line-height: 50px;
                .btn-fullscreen {
                    display: inline-block;
                    transform: rotate(45deg);
                    margin-right: 20px;
                    font-size: 24px;
                    vertical-align: top;
                }
                .el-dropdown-link {
                    display: inline-block;
                    height: 50px;
                    line-height: 50px;
                    padding: 0 5px;
                    .user-img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        vertical-align: top;
                    }
                    .user-text {
                        display: inline-block;
                        padding-left: 5px;
                        vertical-align: top;
                    }
                }
                .el-dropdown-link:hover {
                    background-color: #f3f3f3;
                }

            }
        }
    }
</style>