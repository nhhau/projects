<?php
/**
* Template Name: Home
*/

get_header(); ?>

<!-- CONTENT -->
<main id="site-content">
	<?php while( have_posts() ) : the_post(); ?>
		
		<section id="home-intro" class="home-section">
			<?php
			$intro_1 = get_field( 'intro_1' );

			if( !empty( $intro_1 ) ) : ?>
				<div class="row home-intro-1">
					<?php get_template_part( 'template-parts/explore-research' ); ?>

					<?php
					if( isset( $intro_1['photo']['url'] ) ) {
						echo '<div class="col-lg-8 col-md-6 order-md-last home-intro-photo" style="background-image: url(' .esc_url( $intro_1['photo']['url'] ). ')"></div>';
					}
					?>
					<div class="col-lg-4 col-md-6 order-md-first">
						<div class="home-intro-text">
							<?php
							if( !empty( $intro_1['heading'] ) ) {
								echo '<h1>' .$intro_1['heading']. '</h1>';
							}

							if( !empty( $intro_1['content'] ) ) {
								echo wpautop( $intro_1['content'] );
							}
							?>
						</div>
						<!-- .home-intro-text -->
					</div>
				</div>
				<!-- .home-intro-1 -->
			<?php endif; ?>

			<?php
			$intro_2 = get_field( 'intro_2' );

			if( !empty( $intro_2 ) ) : ?>
				<div class="row home-intro-2">
					<?php
					if( isset( $intro_2['photo']['url'] ) ) {
						echo '<div class="col-lg-4 col-md-6 home-intro-photo" style="background-image: url(' .esc_url( $intro_2['photo']['url'] ). ')"></div>';
					}
					?>
					<div class="col-lg-8 col-md-6">
						<div class="home-intro-text">
							<?php
							if( !empty( $intro_2['heading'] ) ) {
								echo '<h2>' .$intro_2['heading']. '</h2>';
							}

							if( !empty( $intro_2['content'] ) ) {
								echo wpautop( $intro_2['content'] );
							}
							?>
						</div>
						<!-- .home-intro-text -->
					</div>
				</div>
				<!-- .home-intro-2 -->
			<?php endif; ?>
		</section>
		<!-- #home-intro -->

		<?php
		$news = get_field( 'news' );

		if( !empty( $news ) ) : ?>
			<section id="home-news" class="home-section">
				<div class="container-fluid">
					<?php
					if( !empty( $news['heading'] ) ) {
						echo '<h2>' .$news['heading']. '</h2>';
					}
					?>
				</div>

				<?php
				$the_query = new WP_Query( array(
					'post_type' => array('post', 'event'),
					'post_status' => 'publish',
					'posts_per_page' => 3,
					'category__not_in' => sen_exclude_categories()
				));

				if( $the_query->have_posts() ) :
					echo '<div class="row grid-posts">';
					while( $the_query->have_posts() ) : $the_query->the_post();

						get_template_part( 'template-parts/loop', 'post' );

					endwhile; wp_reset_postdata();
					echo '</div><!-- .row -->';
				endif;
				?>
			</section>
			<!-- #home-news -->
		<?php endif; ?>
		
		<section id="home-signup" class="home-section">
			<div class="container-fluid">
				<?php echo sen_socials(); ?>
			</div>
		</section>
		<!-- #home-signup -->

		<section id="home-socials" class="home-section">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-4">
						<h2><span>Latest</span> Facebook</h2>
						<?php
						$the_fb_query = new WP_Query( array(
							'post_type' => 'post',
							'post_status' => 'publish',
							'posts_per_page' => 1,
							'category__in' => array( 256 )
						));

						if( $the_fb_query->have_posts() ) :
							echo '<ul class="menu">';
							while( $the_fb_query->have_posts() ) : $the_fb_query->the_post();
						
								echo '<li>' .get_the_content(). '</li>';

							endwhile; wp_reset_postdata();
							echo '</ul>';
						endif;
						?>
						<br>
						<a href="https://www.facebook.com/TheRaineStudy/" target="_blank" class="btn-more"><span>Follow Us on Facebook</span></a>
					</div>

					<div class="col-md-4">
						<h2><span>Latest</span> Twitter</h2>
						<?php
						$temp = FFDB::getStream( 'wp_ff_streams', 1 );

						echo '<pre>';
						var_dump( $temp );
						echo '</pre>';

						$the_tw_query = new WP_Query( array(
							'post_type' => 'post',
							'post_status' => 'publish',
							'posts_per_page' => 2,
							'category__in' => array( 257 )
						));

						if( $the_tw_query->have_posts() ) :
							echo '<ul class="menu">';
							while( $the_tw_query->have_posts() ) : $the_tw_query->the_post();

								echo '<li>' .get_the_title(). '</li>';

							endwhile; wp_reset_postdata();
							echo '</ul>';
						endif;
						?>
						<br>
						<a href="https://twitter.com/RaineStudy" target="_blank" class="btn-more"><span>Follow Us on Twitter</span></a>
					</div>
					
					<div class="col-md-4">
						<h2><span>Latest</span> Video</h2>
						<?php
						$latest_video = get_field( 'latest_video', 'option' );

						if( !empty( $latest_video ) ) {
							echo '<iframe width="400" height="225" src="https://www.youtube.com/embed/' .$latest_video. '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
						}
						?>
					</div>
				</div>
				<!-- .row -->
			</div>
		</section>
		
	<?php endwhile; ?>
</main>
<!-- END CONTENT -->

<?php get_footer(); ?>