document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("drawButton");
    var prizeContainer = document.getElementById("prizeContainer");

    // 獎項列表，包括獎項名稱和可用數量
    var prizes = [
        { name: "一等獎：iPhone 14", quantity: 1 },
        { name: "二等獎：iPad Pro", quantity: 2 },
        { name: "三等獎：MacBook Air", quantity: 4 },
        { name: "四等獎：Apple Watch", quantity: 5 },
        { name: "五等獎：AirPods Pro", quantity: 10 },
        { name: "參加獎：感謝參加，祝你下次好運！", quantity: 100 }
    ];

    button.addEventListener("click", function() {
        if (prizes.length === 0) {
            alert("所有獎項已經抽完！");
            return;
        }

        // 隨機選取一個獎項
        var randomIndex = Math.floor(Math.random() * prizes.length);
        var selectedPrize = prizes[randomIndex];

        // 更新獎項數量
        selectedPrize.quantity--;

        // 如果獎項數量為0，將其從列表中移除
        if (selectedPrize.quantity === 0) {
            prizes.splice(randomIndex, 1);
        }

        // 顯示抽獎結果
        var newPrizeMessage = document.createElement("p");
        newPrizeMessage.textContent = "你抽到的獎項是：" + selectedPrize.name;
        prizeContainer.appendChild(newPrizeMessage);
    });
});
