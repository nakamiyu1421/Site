<?php get_headers();?>
    <!-- Home -->

    <div class="home">
      <div class="breadcrumbs_container">
        <div class="image_header">
          <div class="header_info">
            <!-- titleを出力します -->
            <div><?phpthe_title();?>/div>
          </div>
        </div>
      </div>
    </div>

    <!-- Course -->
    <?php if (have_post()): //ループをお実装する?>
      <?php while (have_posts()): the_post();?>
        <div class="course">
          <div class="row content-body">
            <!-- Course -->
             <div class="col-lg-8">
              <!-- Course tabs -->
               <div class="course_tabs_container">
                <div class="tab_panels">
                  <!-- Description -->
                   <div class="tab_panel">
                    <div class="tab_panel_title"><?php the_title(); ?></div>
                    <?php the_content(); ?>
                  </div>
                </div>
              </div>
            </div>
        <!-- Course Sidebar -->
        <div class="col-lg-4" style="background-color: #2b7b8e33">
        </div>
      </div>
    </div>
    <?php endwhile;?>
  <?php endif;?>

<?php get_footer();?>