import React from "react";
import "./style.css";

const Board = () => {
  return (
    <>
      <article class="board">
        <div class="board__type1">
          <div class="to-table">
            <div class="to-column-group">
              <span class="to-col"></span>
              <span class="to-col"></span>
              <span class="to-col"></span>
              <span class="to-col"></span>
              <span class="to-col"></span>
            </div>
            <div class="to-thead">
              <div class="to-tr">
                <h3 class="to-th">No.</h3>
                <h3 class="to-th">Title</h3>
                <h3 class="to-th">Author</h3>
                <h3 class="to-th">Date</h3>
                <h3 class="to-th">Views</h3>
              </div>
            </div>
            <div class="to-tbody">
              <div class="to-tr">
                <div class="to-td">1.</div>
                <div class="to-td">
                  <a href="">제목</a>
                </div>
                <div class="to-td">작성자</div>
                <div class="to-td">2019.06.27</div>
                <div class="to-td">23</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Board;
