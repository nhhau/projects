<?php
/**
* Template Name: Home
*/

get_header(); ?>

<!-- CONTENT -->
<main id="site-content">
	<?php while( have_posts() ) : the_post(); ?>

		<?php
		$welcome = get_field( 'home_welcome' );

		if( $welcome ) {
			$welcome_photo = '';

			if( !empty( $welcome['photo'] ) ) {
				$welcome_photo_attr = wp_get_attachment_image_src( $welcome['photo'], 'full' );

				if( $welcome_photo_attr[0] ) {
					$welcome_photo = $welcome_photo_attr[0];
				}
			}
			?>
			<section id="welcome">
				<div class="container position-relative">
					<?php echo do_shortcode( '[dv_find_service]' ); ?>
					
					<div class="welcome__text text-blue container">
						<?php
						if( !empty( $welcome['content'] ) ) {
							echo wpautop( $welcome['content'] );
						}
						?>
					</div>
					<!-- .welcome__text -->
				</div>
				<!-- .container -->
				<div class="welcome__links">
					<div class="main" style="background-image: url(<?php echo esc_url( $welcome_photo ); ?>);">
						<div class="container">
							<?php
							wp_nav_menu( array(
								'menu' => 167,
								'menu_class' => 'menu d-flex flex-wrap',
								'container' => ''
							));
							?>
							
							<?php
							if( !empty( $welcome['heading'] ) ) {
								echo '<h2 class="h1 heading mb-0 text-center text-lg-left">' .trim( $welcome['heading'] ). '</h2>';
							}
							?>
						</div>
						<!-- .container -->
					</div>
					<!-- .main -->

					<?php
					if( !empty( $welcome['features'] ) ) {
						echo '<div class="intro">';
							echo '<div class="container">';
								echo '<ul class="menu d-flex flex-wrap justify-content-center">';
									foreach( $welcome['features'] as $item ) {
										if( empty( $item['title'] ) ) {
											continue;
										}
										echo '<li class="d-md-flex align-items-center">';
											if( !empty( $item['link'] ) ) {
												echo '<a href="' .esc_url( $item['link'] ). '" class="d-md-flex align-items-center">';
											}
											if( !empty( $item['icon'] ) ) {
												echo wp_get_attachment_image( $item['icon'], 'full' );
											}
											echo '<strong>' .$item['title']. '</strong>';
											if( !empty( $item['link'] ) ) {
												echo '</a>';
											}
										echo '</li>';
									}
								echo '</ul>';
							echo '</div>';
						echo '</div><!-- .intro -->';
					}
					?>
				</div>
			</section>
			<!-- #welcome -->
		<?php } ?>

		<section id="home-content">
			<div class="container content-sidebar">
				<div class="row">
					<div class="col-lg-8 content">
						<div class="entry-content">
							<?php
							$intro_text = get_field( 'home_intro_text' );

							if( !empty( $intro_text ) ) {
								echo wpautop( $intro_text );
								echo '<p class="d-lg-none"><a href="#home-content__collapse" data-toggle="collapse" class="more-link collapsed">Read more</a></p>';
								echo '<div class="collapse d-lg-block" id="home-content__collapse">';
							}

							the_content();

							if( !empty( $intro_text ) ) {
								echo '</div>';
							}
							?>
						</div>
						<!-- .entry-content -->
					</div>
					<div class="col-lg-4 sidebar">
						<?php get_sidebar(); ?>
					</div>
				</div>
				<!-- .row -->
			</div>
			<!-- .container -->
		</section>
		<!-- #home-content -->

	<?php endwhile; ?>
</main>
<!-- END CONTENT -->

<?php get_footer(); ?>