<template>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div style="margin-left: -10px;" class="container-fluid">
        <div class="row">
            <!-- BEGIN INBOX -->
            <div class="col-md-12">
                <div class="grid email">
                    <div class="grid-body">
                        <div class="row">
                            <!-- BEGIN INBOX CONTENT -->
                            <div class="col-md-12 ">
                                <Wrapper>
                                    <template #header> <span class=" ">Inbox</span>
                                    </template>
                                    <template #body>
                                        <div class="table-responsive">
                                            <table id="example" class="display table   p-4" style="width:100%">
                                                <thead>
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th>Sender</th>
                                                    <th>Message</th>
                                                    <th>Time</th>


                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="action"><input type="checkbox" /></td>
                                                        <td class="action"><i class="fa fa-star-o"></i></td>
                                                        <td class="action"><i class="fa fa-bookmark-o"></i></td>
                                                        <td class="name"><a href="#">Larry Gardner</a></td>
                                                        <td class="subject"><a href="#">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipisicing elit, sed </a></td>
                                                        <td class="time">08:30 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="action"><input type="checkbox" /></td>
                                                        <td class="action"><i class="fa fa-star-o"></i></td>
                                                        <td class="action"><i class="fa fa-bookmark"></i></td>
                                                        <td class="name"><a href="#">Larry Gardner</a></td>
                                                        <td class="subject"><a href="#">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipisicing elit, sed </a></td>
                                                        <td class="time">08:30 PM</td>
                                                    </tr>
                                                    <tr class="read">
                                                        <td class="action"><input type="checkbox" /></td>
                                                        <td class="action"><i class="fa fa-star"></i></td>
                                                        <td class="action"><i class="fa fa-bookmark"></i></td>
                                                        <td class="name"><a href="#">Larry Gardner</a></td>
                                                        <td class="subject"><a href="#">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipisicing elit, sed </a></td>
                                                        <td class="time">08:30 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="action"><input type="checkbox" /></td>
                                                        <td class="action"><i class="fa fa-star-o"></i></td>
                                                        <td class="action"><i class="fa fa-bookmark-o"></i></td>
                                                        <td class="name"><a href="#">Larry Gardner</a></td>
                                                        <td class="subject"><a href="#">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipisicing elit, sed </a></td>
                                                        <td class="time">08:30 PM</td>
                                                    </tr>
                                                    <tr class="read">
                                                        <td class="action"><input type="checkbox" /></td>
                                                        <td class="action"><i class="fa fa-star-o"></i></td>
                                                        <td class="action"><i class="fa fa-bookmark-o"></i></td>
                                                        <td class="name"><a href="#">Larry Gardner</a></td>
                                                        <td class="subject"><a href="#">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipisicing elit, sed </a></td>
                                                        <td class="time">08:30 PM</td>
                                                    </tr>
                                                    <tr class="read">
                                                        <td class="action"><input type="checkbox" /></td>
                                                        <td class="action"><i class="fa fa-star-o"></i></td>
                                                        <td class="action"><i class="fa fa-bookmark"></i></td>
                                                        <td class="name"><a href="#">Larry Gardner</a></td>
                                                        <td class="subject"><a href="#">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipisicing elit, sed </a></td>
                                                        <td class="time">08:30 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="action"><input type="checkbox" /></td>
                                                        <td class="action"><i class="fa fa-star"></i></td>
                                                        <td class="action"><i class="fa fa-bookmark-o"></i></td>
                                                        <td class="name"><a href="#">Larry Gardner</a></td>
                                                        <td class="subject"><a href="#">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipisicing elit, sed </a></td>
                                                        <td class="time">08:30 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="action"><input type="checkbox" /></td>
                                                        <td class="action"><i class="fa fa-star-o"></i></td>
                                                        <td class="action"><i class="fa fa-bookmark-o"></i></td>
                                                        <td class="name"><a href="#">Larry Gardner</a></td>
                                                        <td class="subject"><a href="#">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipisicing elit, sed </a></td>
                                                        <td class="time">08:30 PM</td>
                                                    </tr>
                                                    <tr class="read">
                                                        <td class="action"><input type="checkbox" /></td>
                                                        <td class="action"><i class="fa fa-star"></i></td>
                                                        <td class="action"><i class="fa fa-bookmark"></i></td>
                                                        <td class="name"><a href="#">Larry Gardner</a></td>
                                                        <td class="subject"><a href="#">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipisicing elit, sed </a></td>
                                                        <td class="time">08:30 PM</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="action"><input type="checkbox" /></td>
                                                        <td class="action"><i class="fa fa-star"></i></td>
                                                        <td class="action"><i class="fa fa-bookmark-o"></i></td>
                                                        <td class="name"><a href="#">Larry Gardner</a></td>
                                                        <td class="subject"><a href="#">Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipisicing elit, sed </a></td>
                                                        <td class="time">08:30 PM</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </template>
                                </Wrapper>


                            </div>
                            <!-- END INBOX CONTENT -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END INBOX -->
</template>
<script setup>
$(document).ready(function () {
    $('#example').DataTable
})

</script>
<style scoped>
a {
    color: black;
    font-size: 13px;
}
</style>