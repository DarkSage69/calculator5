<script>
        function calculate() {
            // Деректерді алу
            const paperWaste = document.getElementById('paperWaste').value;
            const plasticWaste = document.getElementById('plasticWaste').value;
            const lightsCount = document.getElementById('lightsCount').value;
            const lightsHours = document.getElementById('lightsHours').value;

            // Есептеулер (мысалға)
            const paperPrice = 20; // 1 кг қағаздың бағасы, теңге
            const plasticPrice = 40; // 1 кг пластиктің бағасы, теңге
            const dailyWasteSavings = (paperWaste * paperPrice) + (plasticWaste * plasticPrice);
            const monthlyWasteSavings = dailyWasteSavings * 20; // 1 айда 20 оқу күні

            const electricityCostPerKWH = 20; // 1 кВт/сағ бағасы, теңге
            const oldLightPower = 0.06; // Ескі шамның қуаты, кВт (60 Вт)
            const ledLightPower = 0.01; // Жаңа LED шамның қуаты, кВт (10 Вт)

            const dailyEnergyCostOld = lightsCount * oldLightPower * lightsHours * electricityCostPerKWH;
            const dailyEnergyCostNew = lightsCount * ledLightPower * lightsHours * electricityCostPerKWH;
            const dailyEnergySavings = dailyEnergyCostOld - dailyEnergyCostNew;
            const monthlyEnergySavings = dailyEnergySavings * 20; // 1 айда 20 оқу күні

            const totalMonthlySavings = monthlyWasteSavings + monthlyEnergySavings;
            
            // Нәтижені көрсету
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <h3>Мектеп үнемдей алатын сома</h3>
                <p><strong>Айлық қалдықтардан түсетін пайда:</strong> ${monthlyWasteSavings.toFixed(0)} теңге</p>
                <p><strong>Энергия үнемдеуден түсетін пайда:</strong> ${monthlyEnergySavings.toFixed(0)} теңге</p>
                <p><strong>Жалпы айлық үнемдеу:</strong> ${totalMonthlySavings.toFixed(0)} теңге</p>
            `;
        }
    </script>
</body>
</html>
