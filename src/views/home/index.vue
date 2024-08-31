<template>
    <TYXTable msg="TYX_UI" />
    <!-- <slrUpload /> -->
    <!-- <slrUploadNew /> -->
    <ul>
        <li></li>
        <ol></ol>
    </ul>
    <div style="position: relative;" height="600px">
        <slrMap autolocation />
        <input type="text" class="input" @change="inputChange">
        <div></div>
    </div>
</template>

<script setup>
import { IdCardValidate } from "../../utils/regular.js";
const inputChange = (e) => {
    IdCardValidate(e.target.value)
    console.log("%c Line:17 🥔 IdCardValidate(e.target.value)", "color:#33a5ff", IdCardValidate(e.target.value));
    console.log(e.target.value)

}
</script>

