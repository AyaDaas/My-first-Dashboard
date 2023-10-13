<template>
    <div class="table-responsive  p-4">

        <table id="example" class="display table   p-4" style="width:100%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="item.index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.title }} </td>
                    <td>{{ item.location }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.hire_date }}</td>
                    <td>{{ item.salary }}</td>
                </tr>
            </tbody>

        </table>
    </div>
</template>
<script>
import data from './dataTable'
export default {
    data() {
        return {
            data: data
        }
    },
    mounted() {
        $("#example").DataTable();

    }
}

</script>

<style>
th {
    font-size: 12px;
    opacity: .8;
    color: rgb(3, 3, 81);
}

td {
    font-size: 12px;
}

.dataTables_length {
    font-size: 13px;
    color: rgb(3, 3, 81) !important;
    ;
}

.dataTables_wrapper .dataTables_length select,
.dataTables_filter input {
    color: rgb(3, 3, 81) !important;
    border: 1px solid rgb(3, 3, 81) !important;
    font-size: 13px;
    margin-left: 12px;


}

.table.dataTable.no-footer {
    border-bottom: 0px solid rgb(161, 161, 239) !important;
    border-bottom-width: 0px;
    background-color: white
}

.table.dataTable thead th,
table.dataTable thead td {
    border-bottom: 1px solid rgb(161, 161, 239) !important;
    background-color: rgb(249, 249, 250);
}
</style>