<?php
defined( 'ABSPATH' ) || exit;

if( empty( $id ) ) {
	return;
}

$enrolments = $id;
$enrolment = $enrolments[0]['enrolment'];
$enrolment_id = $enrolments[0]['enrolment']->ID;

$payment_method = get_post_meta( $enrolment_id, 'du_payment_method', true );
$coupon_id = get_post_meta( $enrolment_id, 'du_payment_coupon', true );

$total_fee = 0;
$parent_name = '';

if( !empty( $enrolments[0]['enrolee']->data->ID ) ) {
	$parent_name = get_user_meta( $enrolments[0]['enrolee']->data->ID, 'first_name', true );

	if( empty( $parent_name ) && !empty( $enrolments[0]['enrolee']->data->display_name ) ) {
		$parent_name = $enrolments[0]['enrolee']->data->display_name;
	}
}
?>

<h2>Please keep this email for your records.</h2>

Hi <?php echo $parent_name; ?>,
 
<p>Thank you for expressing interest in Charlesworth Ballet School. <br/>This email is a confirmation of your application for the following classes:</p>

<table cellpadding="5" cellspacing="0" width="100%" class="table">
	<tr>
		<th>Child</th>
		<th>Class</th>
		<th>Term</th>
		<th>Location</th>
		<th>Day</th>
		<th>Time</th>
		<th>Teacher</th>
	</tr>

	<?php foreach( $enrolments as $enrolment ) : 
		$total_fee += $enrolment['price_to_pay'];
		?>
		<tr>
			<td><?php echo $enrolment['child']->display_name; ?></td>
			<td><?php echo get_the_title( $enrolment['class_time']->class_id ); ?></td>
			<td><?php echo $enrolment['class_time']->term_name; ?></td>
			<td><?php echo $enrolment['class_time']->branch_name; ?></td>
			<td><?php echo $enrolment['class_time']->day; ?></td>
			<td><?php echo $enrolment['class_time']->from; ?> - <?php echo $enrolment['class_time']->to; ?></td>
			<td><?php echo $enrolment['class_time']->all_teacher_name; ?></td>
		</tr>
	<?php endforeach; ?>
</table>

<p>To complete your enrolment and secure your child’s place in the selected class/es, payment must be made prior to attending your first class. Please use the following details to complete your payment</p>

<p>Charlesworth Ballet Institute <br/>BSB: 016498 <br/>Account Number: 412752807</p>
<p>Reference: Student (child) name</p>

<?php
$total_fee_new = $total_fee;

if( !empty( $coupon_id ) ) {
	$total_fee_new = sen_apply_coupon( $total_fee, $coupon_id );
}
?>

<table cellpadding="5" cellspacing="0" width="100%" class="table">
	<tr>
		<th width="200">Total</th>
		<?php if( !empty( $total_fee_new ) && $total_fee_new !== $total_fee ) { ?>
			<td><del>$<?php echo number_format( $total_fee, 2 ); ?></del> $<?php echo $total_fee_new; ?> (GST inc.)</td>
		<?php } else { ?>
			<td>$<?php echo number_format( $total_fee, 2 ); ?> (GST inc.)</td>
		<?php } ?>
	</tr>
	<tr>
		<th width="200">Date</th>
		<td><?php echo date( 'F jS, Y', time() ); ?></td>
	</tr>
</table>

<p>If you have any questions of concerns, please contact our office.</p>
<p>Thank you for enrolling with Charlesworth Ballet School. We look forward to seeing you when classes start.</p>