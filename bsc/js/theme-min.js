(function($) {
    $(document).ready( function() {
        function home_animate() {
            $('#welcome').waypoint(function(direction) {
                $('#welcome div.photo > img.photo-1').addClass('animate__fadeIn');
                $('#welcome div.photo > img.photo-2').addClass('animate__fadeInUp');
                $('#welcome div.photo > img.photo-3').addClass('animate__fadeInRight');

                this.destroy();
            }, {
                offset: '75%'
            });

            $('#features').waypoint(function(direction) {
                $('#features div.item .icon').addClass('animate__fadeIn');

                this.destroy();
            }, {
                offset: '75%'
            });

            $('#roadmap').waypoint(function(direction) {
                $('#timeline div.item.item-1, #timeline div.item.item-3').addClass('animate__fadeInLeft');
                $('#timeline div.item.item-2, #timeline div.item.item-4').addClass('animate__fadeInRight');

                this.destroy();
            }, {
                offset: '75%'
            });

            $('#tokenomics').waypoint(function(direction) {
                $('#tokenomics div.token-contract .btn').addClass('animate__headShake');

                this.destroy();
            }, {
                offset: '75%'
            });

            $('#parners').waypoint(function(direction) {
                $('#parners ul.parners > li').addClass('animate__zoomIn');

                this.destroy();
            }, {
                offset: '75%'
            });
        }

        home_animate();

        function chart_token() {
            var char_labels = [],
                char_values = [],
                char_colours = [],
                char_amounts = [],
                char_data = [
                {
                    label: 'Stake Rewards',
                    value: 30,
                    color: '#FACC15',
                    amount: '9000000'
                },
                {
                    label: 'Strategic Partner',
                    value: 30,
                    color: '#4ADE80',
                    amount: '8000000'
                },
                {
                    label: 'Team & Advisor',
                    value: 20,
                    color: '#EC4899',
                    amount: '7000000'
                },
                {
                    label: 'Protocol Rewards',
                    value: 4.3,
                    color: '#3B82F6',
                    amount: '6000000'
                },
                {
                    label: 'Marketing',
                    value: 5,
                    color: '#A855F7',
                    amount: '5000000'
                },
                {
                    label: 'Seed',
                    value: 5,
                    color: '#06B6D4',
                    amount: '4000000'
                },
                {
                    label: 'Private',
                    value: 5,
                    color: '#84CC16',
                    amount: '3000000'
                },
                {
                    label: 'IDO/Public Sate',
                    value: 0.5,
                    color: '#F59E0B',
                    amount: '2000000'
                },
                {
                    label: 'Add Liquid',
                    value: 0.2,
                    color: '#F97316',
                    amount: '1000000'
                },
            ];

            $.each( char_data, function(x, y) {
                char_labels.push(y.label);
                char_values.push(y.value);
                char_colours.push(y.color);
                char_amounts.push(y.amount);
            });

            var ctx = document.getElementById('chart-token');
            var chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: char_labels,
                    datasets: [{
                        data: char_values,
                        backgroundColor: char_colours,
                        borderColor: '#24262D'
                    }]
                },
                options: {
                    responsive: false,
                    cutoutPercentage: 75,
                    scales: {
                        yAxes: [{
                            ticks: {
                                display: false
                            }
                        }]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        displayColors: false,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '% (' + char_amounts[tooltipItem.index] + ')';
                            }
                        }
                    }
                }
            });
        }

        if( $('#chart-token').length ) {
            chart_token();
        }
    });
})(jQuery);