import {
  formatDateForHistoryTable,
  formatDateForUserSearchHistoryTable,
} from '../helpers';

describe('Helpers functions', () => {
  describe('formatDateForHistoryTable', () => {
    describe('When call with params', () => {
      it('Then should return correct value', () => {
        let formattedDate = formatDateForHistoryTable('20-02-2022');

        expect(formattedDate).toEqual('2022/02/20');

        formattedDate = formatDateForHistoryTable('2000-02-22');

        expect(formattedDate).toEqual('22/02/2000');
      });
    });
  });

  describe('formatDateForUserSearchHistoryTable', () => {
    describe('When call with params', () => {
      it('Then should return correct value', () => {
        let formattedDate = formatDateForUserSearchHistoryTable(
          '2000-01-01T12:00:00.356Z'
        );

        expect(formattedDate).toEqual('01/01/2000 @ 12:00');
      });
    });
  });
});
