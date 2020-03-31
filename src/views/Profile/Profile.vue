<template>
    <div id="profile">
        <profile-top/>
        <my-music/>
        <my-info/>
    </div>
</template>

<script>
import ProfileTop from './childProfiles/ProfileTop'
import MyMusic from './childProfiles/MyMusic'
import MyInfo from './childProfiles/MyInfo'
export default {
    name: 'Profile',
    components:{
        ProfileTop,
        MyMusic,
        MyInfo
    }
}
</script>

<style scoped>
    
</style>