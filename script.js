// Tab switching functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;

        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('tab-active'));
        // Add active class to clicked button
        btn.classList.add('tab-active');

        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });

        // Show target content
        const targetContent = document.getElementById(`${targetTab}-section`);
        if (targetContent) {
            targetContent.classList.remove('hidden');
        }
    });
});

// Initialize all charts
document.addEventListener('DOMContentLoaded', function () {
    // Enrollment Chart
    const enrollmentCtx = document.getElementById('enrollmentChart').getContext('2d');
    new Chart(enrollmentCtx, {
        type: 'line',
        data: {
            labels: ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই'],
            datasets: [{
                label: 'নতুন ভর্তি',
                data: [45, 52, 38, 65, 58, 72, 68],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#3B82F6',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Grade Distribution Chart
    const gradeCtx = document.getElementById('gradeChart').getContext('2d');
    new Chart(gradeCtx, {
        type: 'doughnut',
        data: {
            labels: ['১ম শ্রেণি', '২য় শ্রেণি', '৩য় শ্রেণি', '৪র্থ শ্রেণি', '৫ম শ্রেণি', '৬ষ্ঠ শ্রেণি'],
            datasets: [{
                data: [120, 135, 142, 128, 156, 145],
                backgroundColor: [
                    '#FF6B6B', '#4ECDC4', '#45B7D1',
                    '#96CEB4', '#FECA57', '#FF9FF3'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });

    // Attendance Chart
    const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
    new Chart(attendanceCtx, {
        type: 'bar',
        data: {
            labels: ['সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার'],
            datasets: [{
                label: 'হাজিরার হার (%)',
                data: [92, 88, 94, 89, 91],
                backgroundColor: [
                    '#8B5CF6', '#A855F7', '#9333EA',
                    '#7C3AED', '#6D28D9'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    new Chart(performanceCtx, {
        type: 'radar',
        data: {
            labels: ['বাংলা', 'ইংরেজি', 'গণিত', 'বিজ্ঞান', 'সমাজবিজ্ঞান'],
            datasets: [{
                label: 'গড় নম্বর',
                data: [85, 78, 82, 88, 80],
                borderColor: '#EF4444',
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                pointBackgroundColor: '#EF4444'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Fee Collection Chart
    const feeCtx = document.getElementById('feeChart').getContext('2d');
    new Chart(feeCtx, {
        type: 'bar',
        data: {
            labels: ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন'],
            datasets: [{
                label: 'সংগৃহীত ফি (হাজার টাকায়)',
                data: [780, 820, 750, 890, 850, 920],
                backgroundColor: '#F59E0B',
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            }
        }
    });

    // Teacher Performance Chart
    const teacherCtx = document.getElementById('teacherChart').getContext('2d');
    new Chart(teacherCtx, {
        type: 'polarArea',
        data: {
            labels: ['উৎকৃষ্ট', 'ভাল', 'গড়', 'উন্নতি প্রয়োজন'],
            datasets: [{
                data: [25, 35, 20, 5],
                backgroundColor: [
                    '#10B981', '#3B82F6', '#F59E0B', '#EF4444'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['জানু', 'ফেব', 'মার', 'এপ্র', 'মে', 'জুন', 'জুল', 'আগ', 'সেপ'],
            datasets: [{
                label: 'আয় (হাজার টাকায়)',
                data: [750, 820, 680, 890, 850, 920, 880, 950, 870],
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#10B981'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            }
        }
    });

    // Events Chart
    const eventsCtx = document.getElementById('eventsChart').getContext('2d');
    new Chart(eventsCtx, {
        type: 'doughnut',
        data: {
            labels: ['ক্রীড়া', 'সাংস্কৃতিক', 'শিক্ষামূলক', 'সামাজিক'],
            datasets: [{
                data: [35, 25, 30, 10],
                backgroundColor: [
                    '#3B82F6', '#10B981', '#F59E0B', '#EF4444'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        usePointStyle: true
                    }
                }
            }
        }
    });
});

// Add smooth scrolling and responsive behavior
window.addEventListener('resize', function () {
    // Trigger chart resize
    Chart.helpers.each(Chart.instances, function (instance) {
        instance.resize();
    });
});